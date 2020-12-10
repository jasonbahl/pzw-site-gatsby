import React from "react";
import styled from 'styled-components';

import SEO from './seo';
import Head from './head';
import GlobalStyles from '../utils/globalStyles';
import GutenbergPatterns from '../utils/gutenbergPatterns';
import TopBar from './TopBar/TopBar';
import FooterBar from './FooterBar/FooterBar';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1240px;
`

const Main = styled.main`
  
`

const Layout = ({ children, pageContext }) => (
  <>
    <SEO pageContext={pageContext} />
    <Head />
    <GlobalStyles />
    <GutenbergPatterns />
    <LayoutWrapper>
      <TopBar />
      <Main>
        {children}
      </Main>
      <FooterBar />
    </LayoutWrapper>
  </>
);

export default Layout;
