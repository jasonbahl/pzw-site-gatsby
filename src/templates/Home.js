import React from 'react';
import Layout from '../components/layout';

export default ({pageContext}) => (
  <Layout pageContext={pageContext}>
    <pre>Template: <i>{pageContext.template.templateName}</i></pre>
  </Layout>
);