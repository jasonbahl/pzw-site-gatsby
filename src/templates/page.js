import React from 'react';
import Layout from '../components/layout';

export default ({pageContext}) => (
  <Layout>
    {/* <pre>Template: <i>{pageContext.template.templateName}</i></pre> */}
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} className="wp_blocks" />
  </Layout>
);