import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Spiral from './spiral';
import { rhythm, scale } from '../utils/typography';
import styles from './layout.module.css';

export default ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`; // eslint-disable-line no-undef
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.2),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          color: '#004e2b',
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          nuklearfiziks.com
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          marginBottom: rhythm(-1),
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          nuklearfiziks.com
        </Link>
      </h3>
    );
  }
  return (
    <Fragment>
      <Spiral />
      <div
        className={styles.outer_container}
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    </Fragment>
  );
};
