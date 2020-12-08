import React from 'react';

import Layout from '../components/layout';
import FlexibleContent from '../components/FlexibleContent';

export default ({pageContext}) => (
  <Layout>
    {pageContext.acfFlexibleContent?.flexibleContent &&
      pageContext.acfFlexibleContent?.flexibleContent.map((layout, index) => {
        return (
          <FlexibleContent
            key={index}
            layout={layout}
            pageContext={pageContext}
          />
        );
      })}
  </Layout>
);