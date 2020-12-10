import React from 'react';
import Layout from '../components/layout';

export default ({pageContext}) => (
  <Layout pageContext={pageContext}>
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} className="wp_blocks" />
    <pre>Template: <i>{pageContext.template.templateName}</i></pre>
  </Layout>
);