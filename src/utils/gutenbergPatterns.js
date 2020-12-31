/**
 * Styling out-of-the-box Wordpress Gutenberg patterns
 * !important use to override WP generated inline styles
**/

import { createGlobalStyle } from 'styled-components';
import { brand, colours, fonts, listReset, transitions } from './vars';
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

    ${media.medium`
      font-size: 80%;
    `}
  }

  .has-white-color {
    color: ${colours.WHITE};
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
  
  .has-apple-background-color {
    background-color: ${colours.APPLE};
  }
  .has-apple-color {
    color: ${colours.APPLE};
  }
  
  .has-atlantis-background-color {
    background-color: ${colours.ATLANTIS};
  }
  .has-atlantis-color {
    color: ${colours.ATLANTIS};
  }
  
  .has-deep-blush-background-color {
    background-color: ${colours.DEEP_BLUSH};
  }
  .has-deep-blush-color {
    color: ${colours.DEEP_BLUSH};
  }
  
  .has-dove-gray-background-color {
    background-color: ${colours.DOVE_GRAY};
  }
  .has-dove-gray-color {
    color: ${colours.DOVE_GRAY};
  }
  
  .has-gallery-background-color {
    background-color: ${colours.GALLERY};
  }
  .has-gallery-color {
    color: ${colours.GALLERY};
  }

  .has-honey-flower-background-color {
    background-color: ${colours.HONEY_FLOWER};
  }
  .has-honey-flower-color {
    color: ${colours.HONEY_FLOWER};
  }
  
  .has-silver-background-color {
    background-color: ${colours.SILVER};
  }
  .has-silver-color {
    color: ${colours.SILVER};
  }
  
  .has-tundora-background-color {
    background-color: ${colours.TUNDORA};
  }
  .has-tundora-color {
    color: ${colours.TUNDORA};
  }
  
  .has-white-background-color {
    background-color: ${colours.WHITE};
  }
  .has-white-color {
    color: ${colours.WHITE};
  }
  
  .has-wild-willow-background-color {
    background-color: ${colours.WILD_WILLOW};
  }
  .has-wild-willow-color {
    color: ${colours.WILD_WILLOW};
  }

  /**
  ==========================================================================
    Layout
  ========================================================================== */

  .wp_blocks > div {
    padding: 0 20px;
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

      .hero {
      
        p {

          ${media.medium`
            margin-right: auto;
            margin-left: auto;
            width: 70vw;
          `}

          ${media.large`
            margin-right: auto;
            margin-left: auto;
            width: 60%;
          `}
        }
            
        .wp-block-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
    }
  }

  /* for exploding margins on only child h* tags inside parents with background colour set */
  .wp-block-group[class~="has-background"] {
    display: flex;
    flex-direction: column;
  }

  /**
  ==========================================================================
    Buttons
  ========================================================================== */

  .wp-block-button {
    margin-bottom: 1rem;

    + .wp-block-button {
      margin-left: 1rem;
    }
  }

  .wp-block-button__link {
    ${'' /* background: ${brand.SECONDARY}; */}
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

  .wp-block-group {

    .wp-block-columns {
      margin-bottom: 1.5rem;

      ${media.medium`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      `}

      .wp-block-column {

        ${media.medium`
          flex: 1 1 0;
        `}

        > .wp-block-group {
          padding: 0 10%;
        }

        .wp-block-image {
          margin-bottom: 1.5rem;
        }
      }
    }
  }

  /* Promos
  ========================================================================= */

  .wp-block-group.hero + .wp-block-columns.promos {
    margin-top: 20px;
  }

  .wp-block-columns.promos {

    ${media.medium`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `}

    .wp-block-column {
      margin-bottom: 20px;

      ${media.medium`
        flex-basis: 25%;
        margin: 0 15px;
      `}
    }
          
    .wp-block-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .wp-block-image {

      .gatsby-image-wrapper {
        width: 100% !important;
      }
    }
  }

  .wp-block-group.promo-card {
    /* background: rgba(204, 204, 204, 0.85); */
    height: 100%;

    .wp-block-group__inner-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0 20px;

      > *:first-child {
        margin-top: 20px;
        margin-bottom: auto;

        + * {
          margin-top: 1.5rem;
        }
      }
    }

    figure {
      margin: 0 -20px -6px;
    }
  }

  /**
  ==========================================================================
    Bio
  ========================================================================== */

  .wp-block-group.bio {

    .has-medium-font-size {
      font-family: ${fonts.SERIF}
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

    &.is-style-rounded img {
      border-radius: 50%;
    }

    .aligncenter {
      text-align: center;
    }

    figure {
      margin: 0;
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
