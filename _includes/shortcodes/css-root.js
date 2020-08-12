/**
 * @file Defines a shortcode for inserting variable data into the CSS `:root`
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for defining CSS `:root` custom properties
 * @module _includes/shortcodes/cssRoot
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig =>

  /**
   * CSS `:root` custom properties
   * @method
   * @name cssRoot
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.cssRoot(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode('cssRoot', data =>
    `:root {
      /* Color Codes */
      --black: ${data.colors.grayscale[900].hex};
      --grayscale-100: ${data.colors.grayscale[100].hex};
      --grayscale-400: ${data.colors.grayscale[400].hex};
      --grayscale-600: ${data.colors.grayscale[600].hex};
      --white: ${data.colors.grayscale.white.hex};
      // --offwhite: #eeeee6;
      /* Named Properties */
      --background-color: var(--white);
      --gray: var(--grayscale-600);
      --border: 2px solid var(--gray);
      --text-color: var(--black);
      --base-unit: 1em;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --background-color: var(--white);
        --gray: var(--grayscale-400);
        --text-color: var(--black);
      }
    }`)
