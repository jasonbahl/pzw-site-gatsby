import { useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { brand, colours } from '../../utils/vars';

const Banner = styled.div`
  background: ${brand.PRIMARY_LIGHT};
  color: #fff;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 100;

  p {
    margin: 0;
  }

  a {
    background: ${colours.WHITE};
    border: 1px solid transparent;
    color: ${brand.PRIMARY};
    display: inline-block;
    padding: 10px;

    &:focus,
    &:hover {
      background: transparent;
      border-color: ${colours.WHITE};
      color: ${colours.WHITE};
      transition: none;
    }
  }
`

const DonateBanner = () => {
  const data = useStaticQuery(graphql`
    query DonateBannerQuery {
      wpPage(slug: {eq: "donate-now"}) {
        id
        content
      }
    }
  `)

  return(
    <Banner dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
  )
};

export default DonateBanner;