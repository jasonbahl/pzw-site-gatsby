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
  const props = useStaticQuery(graphql`
    query ImpactsQuery {
      wpPage(slug: {eq: "home"}) {
        aclImpacts {
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
      <h2>{props.wpPage.aclImpacts.impactheading}</h2>
      <ImpactWrapper>
        {props.wpPage.aclImpacts.impact.map(impact => (
          <div key={impact.icon.id}>
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