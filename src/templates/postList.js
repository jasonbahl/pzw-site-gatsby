import React from 'react';
import PropTypes from "prop-types"
import { Link } from 'gatsby';
import { Helmet } from "react-helmet"
import styled from 'styled-components';
import Layout from '../components/layout';

const Pagination = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`

const PageNumber = styled.li`
  background: ${props => props.isCurrentPage ? '#eee' : '#fff'};
  border: 1px solid #eee;
`

const PageLink = styled(Link)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`

const PostList = ({ meta, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Helmet
      title={pageContext.newsSEO?.title}
      meta={[
        {
          name: `description`,
          content: pageContext.newsSEO?.metaDesc,
        },
        {
          property: `og:title`,
          content: pageContext.newsSEO?.opengraphTitle,
        },
        {
          property: `og:description`,
          content: pageContext.newsSEO?.metaDesc,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: pageContext.newsSEO?.opengraphPublisher,
        },
        {
          name: `twitter:title`,
          content: pageContext.newsSEO?.twitterTitle,
        },
        {
          name: `twitter:description`,
          content: pageContext.newsSEO?.twitterDescription,
        },
      ].concat(meta)}
    />
    <h1>{pageContext.newsMenuItem.label}</h1>
    {pageContext.posts.map(post => (
      <div key={post.node.id}>
        <h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
        <time>{post.node.date}</time>
        <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
        <Link to={`/news/${post.node.slug}`}>Read more</Link>
      </div>
    ))}
    <Pagination>
      {Array.from({length: pageContext.numberOfPages}).map((page, index) => (
        <PageNumber key={index} isCurrentPage={index + 1 === pageContext.currentPage}>
          <PageLink to={index === 0 ? '/news' : `/news/${index + 1}`}>
            {index + 1}
          </PageLink>
        </PageNumber>
      ))}
    </Pagination>
  </Layout>
);

PostList.defaultProps = {
  meta: [],
}

PostList.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default PostList; 