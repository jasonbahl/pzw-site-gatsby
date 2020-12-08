import React from 'react';
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from  'gatsby'
import styled from 'styled-components';

import PlatformNav from './PlatformNav';
import PromoCard from './Promos'

const HeroSection = styled.section`
  
`

const HeroIntro = styled.div`
  color: #fff;
  padding: 80px 20px 20px;
  text-align: center;

  h1 {
    font-size: 2.6rem;
    margin-top: 0;
  }

  p {
    font-size: 1.5rem;
    margin: auto;
    width: 50%;
  }

  ul {
    text-align: center;
  }
`

const HomeHero = () => {
  const data = useStaticQuery(graphql`
    query HomeHeroQuery {
      wpPage(slug: {eq: "home"}) {
        id
        acfHomeHero {
          heading
          image {
            sourceUrl
          }
          strapline
        }
      }
    }
  `
  )

  const sourceUrl = data.wpPage.acfHomeHero.image?.sourceUrl;
  const heading = data.wpPage.acfHomeHero.heading;
  const strapline = data.wpPage.acfHomeHero.strapline;
  
  return (
    <HeroSection style={{ background: sourceUrl ? `url(${sourceUrl}) no-repeat` : `transparent` }}>
      <HeroIntro>
        <h1>{heading}</h1>
        <p>{strapline}</p>
      </HeroIntro>
      <PlatformNav />
      <PromoCard />
    </HeroSection>
  )

};

HomeHero.defaultProps = {
  sourceUrl: ``,
  heading: ``,
  strapline: ``
}

HomeHero.propTypes = {
  sourceUrl: PropTypes.string,
  heading: PropTypes.string,
  strapline: PropTypes.string,
}

export default HomeHero;