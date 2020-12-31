import React from 'react';
import styled from 'styled-components';

import { brand } from '../../utils/vars';

import Branding from './Branding';
import SocialNav from './SocialNav';
import MainNav from './MainNav';
import PlatformNav from './PlatformNav';
import DonateBanner from './DonateBanner';

const Header = styled.header`
  align-items: center;
  background: ${brand.PRIMARY};
  display: flex;
  flex-wrap: wrap;
  font-size: 75%;
  justift-content: space-between;
  padding: 20px;
`

const TopBar = () => (
  <>
    <Header>
      <Branding />
      <SocialNav />
      <MainNav />
      <PlatformNav />
    </Header>
    <DonateBanner />
  </>
)

export default TopBar;