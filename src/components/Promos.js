import React from 'react';
import { graphql, useStaticQuery } from  'gatsby'
import styled from 'styled-components';

import { media } from '../utils/media';

const PromosWrapper = styled.div`
  display: flex;
`

const Promo = styled.div`
  background: rgba(204, 204, 204, 0.85);

  ${media.medium`
    flex: 0 0 auto;
    width: 25%;
  `}

  img {
    max-width: 100%
  }
`

const Promos = () => {
  const data = useStaticQuery(graphql`
    query PromosQuery {
      wpPage(slug: {eq: "home"}) {
        acfPromo {
          card {
            teaser
            title
            cta {
              target
              title
              url
            }
            image {
              altText
              id
              sourceUrl
            }
          }
        }
      }
    }
  `
  )

  // const sourceUrl = data.wpPage.acfHomeHero.image?.sourceUrl;
  
  return (
    <PromosWrapper>
      {data.wpPage.acfPromo.card.map((card, index) => (
        <Promo key={index}>
          <p>{card.title}</p>
          <p>{card.teaser}</p>
          <a href={card.cta?.url} target={card.cta?.target}>{card.cta?.title}</a>
          <img src={card.image.sourceUrl} alt={card.image.alt} />
        </Promo>
      ))}
    </PromosWrapper>
  )

};

export default Promos;