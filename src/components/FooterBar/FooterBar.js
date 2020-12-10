import React from 'react';
import styled from 'styled-components';

import FooterNav from './FooterNav';

import { brand } from '../../utils/vars'

const Footer = styled.footer`
  background: ${brand.PRIMARY};
  color: #fff;
  font-size: 12px;
  margin-top: auto;
  padding: 20px 20px 10px;
`

const FooterBar = () => (
  <Footer>
    <FooterNav />
    <p>Plan Zheroes — The Zero Food Waste Heroes is a C.I.O — Registered Charity Number 1154291 (21 October 2013)</p>
  </Footer>
)

export default FooterBar;