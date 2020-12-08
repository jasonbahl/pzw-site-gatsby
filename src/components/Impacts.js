import React from 'react';
import { graphql, useStaticQuery } from  'gatsby';
import styled from 'styled-components';

import { colours } from '../utils/vars';

const ImpactWrapper = styled.div`

`

const ImpactIcon = styled.div`
  align-items: center;
  border-radius: 100%;
  display: flex;
  height: 150px;
  justify-content: center;
  width: 150px;

  &.iconapple {
    background-color: ${colours.APPLE};
  }

  img {
    max-width: 35%;
  }
`

const Impacts = () => {
  const data = useStaticQuery(graphql`
    query ImpactsQuery {
      wpPage(slug: {eq: "home"}) {
        acfImpacts {
          impactheading
          impact {
            icon {
              id
              slug
              sourceUrl
            }
            label
            metric
          }
        }
      }
    }
  `
  )
  
  return (
    <>
      <h2>{data.wpPage.acfImpacts.impactheading}</h2>
      <ImpactWrapper>
        {data.wpPage.acfImpacts.impact.map((impact, index) => (
          <div key={index}>
            <ImpactIcon className={impact.icon.slug}>
              <img src={impact.icon.sourceUrl} alt="" />
            </ImpactIcon>
            <p>{impact.label}</p>
            <p>{impact.metric}</p>
          </div>
        ))}
      </ImpactWrapper>
    </>
  )

};

export default Impacts;