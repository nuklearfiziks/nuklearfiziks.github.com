/**
 * @file
 * Dynamic background
 */

import React, { PureComponent } from 'react'
import * as d3 from 'd3'

class Background extends PureComponent {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    const { innerHeight, innerWidth } = window
    const svg = d3
      .select(this.ref.current)
      .attr('width', innerWidth)
      .attr('height', innerHeight)
    const n = 100
    const [cx, cy] = [innerWidth / 3, innerHeight / 3]
    const circles = svg
      .selectAll('circle')
      .data(Array(n).fill(null))
      .enter()
      .append('circle')
      .attr('fill', (d, i) => (i % 2 ? '#C8AD93' : 'black'))
      .attr('cx', (d, i) => cx - innerWidth / (i + 1))
      .attr('cy', (d, i) => cy)
      .attr('r', (d, i) => innerHeight / (i + 1))

    // Ease amount of change as cursor moves to left
    // const slope = d3
    //   .scalePow()
    //   .exponent(10)
    //   .range([innerWidth, innerWidth / 2])
    //   .domain([0, innerWidth / 2])

    d3.select('body').on('mousemove', e => {
      const { pageX, pageY } = d3.event
      // circles
      //   .attr('cx', (d, i) => cx + slope(pageX) / (i + 1))
      //   .attr('cy', (d, i) => cy + pageY / (i + 1))

      if (pageX > innerWidth * 0.75) {
        circles
          .attr('cx', (d, i) => cx - pageX / (i + 1))
          .attr('cy', (d, i) => cy - pageY / (i + 1))
      }
      // else {
      //   circles
      //     .attr('cx', (d, i) => {
      //       const x = cx - slope(pageX) / i
      //       if (x !== -Infinity) {
      //         return x
      //       }
      //     })
      //     .attr('cy', (d, i) => cy - pageY / (i + 1))
      // }
    })
  }

  render() {
    return <svg style={{ position: 'fixed', zIndex: -1 }} ref={this.ref} />
  }
}

export default Background
