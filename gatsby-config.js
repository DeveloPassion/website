"use strict";

const path = require("path");
const siteMetadata = require("./src/metadata.json");

module.exports = {
  // No path prefix needed with the domain
  //pathPrefix: '',

  siteMetadata,
  plugins: [
    // reference: https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet
    "gatsby-plugin-react-helmet",

    // reference: https://www.gatsbyjs.org/packages/gatsby-plugin-manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: "/",
        background_color: "#242942",
        theme_color: "#2a2f4a",
        display: "minimal-ui",
        icon: "src/assets/images/developassion-logo.png", // This path is relative to the root of the site.
        //theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },

    // reference: https://www.gatsbyjs.org/packages/gatsby-plugin-sass/
    "gatsby-plugin-sass",

    // reference: https://www.gatsbyjs.org/packages/gatsby-plugin-offline
    // TODO enable later when this is fixed: https://github.com/gatsbyjs/gatsby/issues/10036
    //'gatsby-plugin-offline',

    // reference: https://www.gatsbyjs.org/packages/gatsby-plugin-ts-loader/
    {
      resolve: "gatsby-plugin-ts-loader",
      options: {
        tslint: true, // false or exclude to disable tslint
      },
    },

    {
      resolve: "gatsby-plugin-stylelint",
      options: {
        configFile: ".stylelintrc",
        emitErrors: false,
        files: ["src/**/*.?(pc|sc|c|sa)ss"], // pcss|scss|css|sass
      },
    },

    // images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets/images`),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    // blog
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: path.join(__dirname, `content`, `blog`),
      },
    },

    //references:
    // https://www.gatsbyjs.org/packages/gatsby-plugin-react-svg/
    // https://github.com/jacobmischka/gatsby-plugin-react-svg
    // https://github.com/jhamlet/svg-react-loader
    {
      resolve: "gatsby-plugin-react-svg",
      test: /\.svg$/,
      options: {
        rule: {
          include: /assets\/images\/svg\//,
        },
      },
    },

    // reference: https://www.npmjs.com/package/gatsby-plugin-sitemap
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ["/elements"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
 
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        mergeScriptHashes: true,
        mergeStyleHashes: false,
        mergeDefaultDirectives: false,
        // references:
        // https://content-security-policy.com/
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
        // https://scotthelme.co.uk/csp-cheat-sheet
        directives: {
          "base-uri": "'self'",
          "block-all-mixed-content": "",
          "child-src": "'self'",
          "connect-src": "'self'",
          "default-src": "'self'",
          "disown-opener": "",
          "font-src": "'self' data: https://fonts.gstatic.com",
          "form-action": "'none'",
          //"frame-ancestors": "'none'", // cannot be used if CSP defined using a meta tag
          "frame-src": "'self'",
          "img-src": "'self' data: www.google-analytics.com",
          "manifest-src": "'self'",
          "media-src": "'self'",
          "object-src": "'none'",
          "plugin-types": "application/pdf",
          "prefetch-src": "'self'",
          "sandbox": "",
          "script-src": "'self' www.google-analytics.com",
          "style-src": "'self' 'unsafe-inline' blob: https://fonts.googleapis.com",
          "upgrade-insecure-requests": "",
          "worker-src": "'self'",
        }
      }
    },
    
    // reference: https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Access-Control-Allow-Origin: null",
            //"Clear-Site-Data: *" // useful for logout pages: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data
            
            // reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
            // Not yet ready for prime time
            //"Feature-Policy: autoplay: 'none'; camera: 'none'; document-domain: 'none'; encrypted-media: 'none'; fullscreen: 'self'; geolocation: 'none'; microphone: 'none'; midi: 'none'; payment: 'none'; vr: 'none'",
            "Referrer-Policy: origin",
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
            "Upgrade-Insecure-Requests: 1",
            "X-Content-Type-Options: nosniff",
            "X-Frame-Options: deny",
            "X-XSS-Protection: 1; mode=block",
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
