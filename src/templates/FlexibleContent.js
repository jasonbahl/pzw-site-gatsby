import React from 'react';
import Layout from '../components/layout';

import FlexibleContent from '../components/FlexibleContent';

export default ({pageContext}) => (
  <Layout>
    <pre>Template: <i>{pageContext.template.templateName}</i></pre>
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
    <FlexibleContent />
  </Layout>
);