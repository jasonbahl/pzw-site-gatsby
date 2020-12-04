import { css } from 'styled-components';

import { breakpoints } from './vars';

export const media = {
  medium: (...args) => css`
    @media (${breakpoints.TABLET}) {
      ${css(...args)}
    }`,
  large: (...args) => css`
    @media (${breakpoints.DESKTOP}) {
      ${css(...args)}
    }`,
};
