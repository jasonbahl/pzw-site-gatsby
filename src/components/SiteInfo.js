import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
`

const SiteInfo = () => (
  <StaticQuery query={graphql`
    {
      allWp {
        edges {
          node {
            generalSettings {
              description
              title
            }
          }
        }
      }
    }
  `} render={data => (
    <SiteInfoWrapper>
      <div>
        {data.allWp.edges[0].node.generalSettings.title}
      </div>
      <div>
        {data.allWp.edges[0].node.generalSettings.description}
      </div>
    </SiteInfoWrapper>
  )} />
);

export default SiteInfo;