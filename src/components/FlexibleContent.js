import React from 'react';
import { graphql, useStaticQuery } from  'gatsby';
import styled from 'styled-components';

import { colours } from '../utils/vars';

const FlexibleContent = () => {
  const props = useStaticQuery(graphql`
    query FlexibleContentQuery {
      wpPage(slug: {eq: "test-flexible-content"}) {
        aclTestFlexibleContent {
          fieldGroupName
          testFlexibleContent1 {
            ... on WpPage_Acltestflexiblecontent_TestFlexibleContent1_TestBlock {
              testBlockContent
              testBlockTitle
            }
          }
        }
      }
    }
  `
  )
  
  return (
    <div>
      {props.wpPage.aclTestFlexibleContent.testFlexibleContent1.map(block => (
        <div>
          <p>{block.testBlockTitle}</p>
          <p>{block.testBlockContent}</p>
        </div>
      ))}
    </div>
  )

};

export default FlexibleContent;