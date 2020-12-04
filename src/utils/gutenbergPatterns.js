/**
 * Styling out-of-the-box Wordpress Gutenberg patterns
 * !important use to override WP generated inline styles
**/

import { createGlobalStyle } from 'styled-components';
import { brand, fonts, listReset } from './vars';
import { media } from './media';

const GutenbergPatterns = createGlobalStyle`

  /**
  ==========================================================================
    Wordpress utility
  ========================================================================== */

  .has-white-color {
    color: #fff;
  }

  .has-text-align-center {
    text-align: center;
  }

  .has-text-align-right {
    text-align: right;
  }

  .wp-block-image img,
  .blocks-gallery-item img {
    max-width: 100%;
  }

  /**
  ==========================================================================
    Buttons
  ========================================================================== */

  .wp-block-buttons {
    display: flex;
    flex-wrap: wrap;
  }

  ${media.medium`
    .wp-block-buttons.aligncenter {
      justify-content: center;
    }
  `}

  .wp-block-button {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .wp-block-button__link {
    display: block;
    padding: 10px 15px;

    &.has-background {
      background: ${brand.SECONDARY} !important;
      color: #424242 !important;
    }
  }

  .is-style-outline .wp-block-button__link,
  .wp-block-button__link.is-style-outline {
    background: ${brand.PRIMARY} !important;
    color: #fff !important;
  }

  /**
  ==========================================================================
    Columns
  ========================================================================== */

  .wp-block-group .wp-block-columns {
    margin-bottom: 1.5rem;

    ${media.medium`
      display: flex;
      justify-content: space-between;
      margin: 0 -1rem;
    `}

    .wp-block-column {

      ${media.medium`
        flex: 1 1 50%;
        margin: 1rem;
      `}
    }
  }

  /**
  ==========================================================================
    Gallery
  ========================================================================== */

  .wp-block-gallery {
    margin: 0;
  }

  .blocks-gallery-grid {
    ${listReset};

    ${media.medium`
      display: flex;
      justify-content: space-between;
      margin: 0 -1rem;
    `}

    .blocks-gallery-item {
      margin-bottom: 1rem;

      ${media.medium`
        flex: 1 1 50%;
        margin: 1rem;
      `}
    }

    figure {
      margin: 0;
    }
  }

  /**
  ==========================================================================
    Headers
  ========================================================================== */

  .wp-block-cover {
    display: flex;
    margin-bottom: 1.5rem;

    .wp-block-cover__inner-container {
      margin: auto;
      padding: 0 20px;
      
      p {
        font-family: ${fonts.SERIF};
      }
    }
  }

  /**
  ==========================================================================
    Text
  ========================================================================== */

  .wp-block-image {

    .aligncenter {
      text-align: center;
    }

    .is-style-rounded img {
      border-radius: 50%;
    }
  }

  .wp-block-quote {
    font-family: ${fonts.SERIF};
    font-style: italic;
    margin: 0 auto;
    width: 75%;

    &.has-text-align-center {
      text-align: center;
    }

    cite {
      font-size: 85%;
      font-weight: normal;
      opacity: .85;
    }
  }

`

export default GutenbergPatterns;
