/**
 * @file
 * Dynamic background
 */

import React, { PureComponent } from 'react';
import * as debounce from 'lodash.debounce';
import * as d3 from 'd3';
import styles from './spiral.module.css';

const MAX_WIDTH = 980;

class Background extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const { innerHeight, innerWidth } = window;
    const isMobile = innerWidth < MAX_WIDTH;
    const svg = d3
      .select(this.ref.current)
      .attr('width', innerWidth)
      .attr('height', innerHeight);
    this.svg = svg;

    const n = 100; // isMobile ? 50 : 100;
    const [cx, cy] = isMobile
      ? [innerWidth / 2, innerHeight * 0.75]
      : [innerWidth / 3, innerHeight / 3];

    // Ease amount of change as cursor moves to left
    const slopeX = d3
      .scaleLinear()
      .clamp(true)
      .range([innerWidth * 0.75, innerWidth])
      .domain([innerWidth, innerWidth * 0.5]);

    const slopeY = d3
      .scaleLinear()
      .clamp(true)
      .range([cy, innerHeight])
      .domain([innerHeight * 5, cy]); // should this be document.body.offsetHeight ?

    const circles = svg
      .selectAll('circle')
      .data(Array(n).fill(null))
      .enter()
      .append('circle')
      .attr('fill', (d, i) => (i % 2 ? '#C8AD93' : 'black'))
      .attr('cx', (d, i) => (isMobile ? cx : cx - slopeX(innerWidth) / (i + 1)))
      .attr('cy', (d, i) => (isMobile ? cy + slopeY(innerHeight) / (i + 1) : cy))
      .attr('r', (d, i) => innerHeight / (i + 1));

    if (isMobile) {
      d3.select(window).on('scroll', () => {
        const { scrollY } = window;
        circles.attr('cy', (d, i) => cy + slopeY(scrollY) / (i + 1));
      });
      console.dir(circles.size());
      const lastCircle = d3.select(circles.nodes()[0]);

      // svg.style(
      //   'clip-path',
      //   `circle(${lastCircle.attr('r')}px at ${lastCircle.attr('cx')}px ${lastCircle.attr('cy')}px)`,
      // );
    } else {
      d3.select('body').on('mousemove', () => {
        const { pageX, pageY } = d3.event;
        circles
          .attr('cx', (d, i) => cx - slopeX(pageX) / (i + 1))
          .attr('cy', (d, i) => cy - pageY / (i + 1));
      });
    }

    this.resizeListener = window.addEventListener('resize', debounce(this.onResize.bind(this), 500));
  }

  onResize() {
    console.log('resize');
    this.svg.selectAll('circle').remove();
    d3.select('body').on('mousemove', null);
    d3.select(window).on('scroll', null);
    this.componentDidMount();
  }

  render() {
    return <svg ref={this.ref} className={styles.spiral} />;
  }
}

export default Background;
