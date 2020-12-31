// Global CSS variables
import { css } from 'styled-components';

export const colours = {
  APPLE: '#499a3c',
  ATLANTIS: '#98CA3D;',
  DEEP_BLUSH: '#eb618a',
  DOVE_GRAY: '#707070',
  GALLERY: '#f0f0f0',
  HONEY_FLOWER: '#5a2483',
  SILVER: '#cccccc',
  TUNDORA: '#424242',
  WHITE: '#ffffff',
  WILD_WILLOW: '#aecc66',
}

export const brand = {
  PRIMARY: `${colours.HONEY_FLOWER}`,
  PRIMARY_LIGHT: '#9562a9',
  PRIMARY_MEDIUM: '#88559c',
  SECONDARY: '#98CA3D',
  SECONDARY_MEDIUM: '#8abb33',
  SECONDARY_DARK: '#82af30',
};

export const breakpoints = {
  TABLET: 'min-width: 768px',
  DESKTOP: 'min-width: 992px',
};

export const fonts = {
  SERIF: '"Bree Serif", Georgia, "Times New Roman", Times, serif',
  SANS_SERIF: '"Open Sans", sans-serif',
}

export const listReset = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const transitions = {
  DURATION: '200ms',
  TIMING: 'ease-in-out',
}