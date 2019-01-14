"use strict";

const path = require("path");
const siteMetadata = require("./metadata");

module.exports = {
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
	],
};
