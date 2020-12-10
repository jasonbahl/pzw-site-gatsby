import React from 'react';
import Layout from '../components/layout';

import HomeHero from '../components/HomeHero'
import Impacts from '../components/Impacts'
import FlexibleContent from '../components/FlexibleContent';

export default ({pageContext}) => (
  <Layout>
    <pre>Template: <i>{pageContext.template.templateName}</i></pre>
  </Layout>
);