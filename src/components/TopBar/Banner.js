import React from 'react';
import styled from 'styled-components';

import { brand } from '../../utils/vars';

const BannerWrapper = styled.div`
  background: ${brand.PRIMARY_LIGHT};
  color: #fff;
  padding: 10px 20px;
  position: sticky;
  top: 0px;
  z-index: 100;

  p {
    margin: 0;
  }
`

const Banner = () => (
  <BannerWrapper>
    <p>Please consider supporting our work: with your financial support we can get even more food to vulnerable people <a href="https://cafdonate.cafonline.org/6018" target="_blank" rel="noreferrer">Donate now</a></p>
  </BannerWrapper>
)

export default Banner;