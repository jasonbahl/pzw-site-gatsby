import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import styled from 'styled-components';

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

export default ({ pageContext }) => (
  <Layout>
    <h1>News</h1>
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