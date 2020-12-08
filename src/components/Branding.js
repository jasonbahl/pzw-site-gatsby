import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const LogoWrapper = styled.div`

  img {
    max-height: 57px;
  }
`

const Branding = () => {
  const data = useStaticQuery(graphql`
    query BrandingQuery {
      wpMediaItem(slug: {eq: "main_logo"}) {
        altText
        slug
        sourceUrl
      }
    }
  `
  )
  
  return (
    <LogoWrapper>
      <Link to="/">
        {/* <img src={data.wpMediaItem.sourceUrl} alt={data.wpMediaItem.altText} alt="" /> */}
        <img src="http://localhost:8888/wp-content/uploads/2020/11/main_logo.png"  alt="" />
      </Link>
    </LogoWrapper>
  )
};

export default Branding;