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
      allWp {
        edges {
          node {
            seo {
              schema {
                companyLogo {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `
  )
  
  return (
    <LogoWrapper>
      <Link to="/">
        <img src={data.allWp.edges[0].node.seo.schema.companyLogo.sourceUrl} alt="" />
      </Link>
    </LogoWrapper>
  )
};

export default Branding;