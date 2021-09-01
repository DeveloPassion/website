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
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,

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
				excludes: ["/elements"],
				query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
 
          allSitePage {
            nodes {
              path
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
					"connect-src": "'self' https://plausible.io",
					"default-src": "'self'",
					"disown-opener": "",
					"font-src": "'self' data: https://fonts.gstatic.com",
					"form-action": "'none'",
					//"frame-ancestors": "'none'", // cannot be used if CSP defined using a meta tag
					"frame-src": "'self'",
					"img-src": "'self' data:",
					"manifest-src": "'self'",
					"media-src": "'self'",
					"object-src": "'self' data:",
					"prefetch-src": "'self'",
					sandbox: "",
					"script-src": "'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io",
					"style-src": "'self' 'unsafe-inline' blob: https://fonts.googleapis.com",
					"upgrade-insecure-requests": "",
					"worker-src": "'self'",
				},
			},
		},

		// reference: https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {
					"/*": [
						// The CSP is generated by gatsby-plugin-csp and added to the _headers file in public/ before publish.
						// That is handled by the build:prod script which executes csp-util.js, which looks for the token below.
						"Content-Security-Policy: __REPLACE_ME__",
						//"Access-Control-Allow-Origin: null",
						//"Clear-Site-Data: *" // useful for logout pages: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data

						// reference: https://scotthelme.co.uk/goodbye-feature-policy-and-hello-permissions-policy/
						"Permissions-Policy: accelerometer=(), camera=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(self), usb=()",
						"Referrer-Policy: strict-origin",
						"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
						"Upgrade-Insecure-Requests: 1",
						"X-Content-Type-Options: nosniff",
						"X-DNS-Prefetch-Control: on",
						"X-Download-Options: noopen",
						"X-Frame-Options: DENY",
						"X-Permitted-Cross-Domain-Policies: none",
						"X-XSS-Protection: 0",
					],
				}, // option to add more headers. `Link` headers are transformed by the below criteria
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
			},
		},

		// reference: https://www.gatsbyjs.com/plugins/gatsby-plugin-plausible/
		{
			resolve: `gatsby-plugin-plausible`,
			options: {
				domain: `developassion.be`,
			},
		},
	],
};
