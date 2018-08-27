import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import Nav from '../components/Navigation';
import Layout from '../components/layout';
import { rhythm } from '../utils/typography';
import './styles.css';

const BlogIndex = (props) => {
  const { title: siteTitle } = props.data.site.siteMetadata;
  const { edges: posts } = props.data.allMarkdownRemark;
  const { location } = props;
  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <Bio />
      {posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
