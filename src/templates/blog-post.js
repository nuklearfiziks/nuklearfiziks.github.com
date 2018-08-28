import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/layout';
import { rhythm, scale } from '../utils/typography';

const BlogPostTemplate = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;
  const { title: siteTitle } = data.site.siteMetadata;
  const { pageContext } = props;
  const { previous, next } = pageContext;
  const { location } = props;

  return (
    <Layout location={location}>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {previous && (
          <li>
            <Link to={previous.fields.slug} rel="prev">
              ←
              {' '}
              {previous.frontmatter.title}
            </Link>
          </li>
        )}

        {next && (
          <li>
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title}
              {' '}
→
            </Link>
          </li>
        )}
      </ul>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;