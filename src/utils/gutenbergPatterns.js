/**
 * Styling out-of-the-box Wordpress Gutenberg patterns
 * !important use to override WP generated inline styles
**/

import { createGlobalStyle } from 'styled-components';
import { brand, fonts, listReset, transitions } from './vars';
import { media } from './media';

const GutenbergPatterns = createGlobalStyle`

  /**
  ==========================================================================
    Wordpress utility
  ========================================================================== */

  .has-huge-font-size {
    font-size: 210%;
  }

  .has-large-font-size {
    font-size: 160%;
  }

  .has-medium-font-size {
    font-size: 120%;
  }

  .has-normal-font-size {
    font-size: 110%;
  }

  .has-small-font-size {
    font-size: 80%;
  }

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
  Headers
========================================================================== */

.wp-block-cover {
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  .wp-block-cover__inner-container {
    margin: auto;
    padding: 0 20px;

    .hero {
    
      p {

        ${media.medium`
          margin-right: auto;
          margin-left: auto;
          width: 50%;
        `}
      }
          
      .wp-block-buttons {
        display: flex;
        flex-wrap: wrap;
      }

      ${media.medium`
        .wp-block-buttons {
          justify-content: center;
        }
      `}
    }
  }
}

  /**
  ==========================================================================
    Buttons
  ========================================================================== */

  .wp-block-button {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .wp-block-button__link {
    background: ${brand.SECONDARY};
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
    transform: scale(1);
    transition: all ${transitions.DURATION} ${transitions.TIMING};

    &:focus,
    &:hover {
      transform: scale(1.15);
      transition: all ${transitions.DURATION} ${transitions.TIMING};
    }
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

  /* Promos
  ========================================================================= */

  .wp-block-group.hero + .wp-block-columns.promos {
    margin-top: 20px;
  }

  .wp-block-columns.promos {
    display: flex;
    justify-content: center;

    .wp-block-column {
      flex-basis: 25%;
      margin: 0 15px;
    }
          
    .wp-block-buttons {
      display: flex;
      flex-wrap: wrap;
    }

    ${media.medium`
      .wp-block-buttons {
        justify-content: center;
      }
    `}

    .wp-block-image {

      .gatsby-image-wrapper {
        width: 100% !important;
      }
    }
  }

  .wp-block-group.promo-card {
    background: rgba(204, 204, 204, 0.85);

    .wp-block-group__inner-container {
      padding: 20px;
    }

    figure {
      margin: 0 -20px -26px;
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
