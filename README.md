# DeveloPassion's Website

This is the code behind DeveloPassion's official Website: https://www.developassion.be.

## Build

-   run yarn install
-   execute `npm run build` to run the development version locally
-   execute `npm run build:prod` to build the production version (put under public/)

GraphiQL: http://localhost:8000/___graphql

## Metadata

Adapt metadata.js

## Conditions

-   Add new PDF to `static`
-   Adapt metadata
-   Update `terms.tsx`

## Images

Loaded through GraphQL with Gatsby Image. Generates various sizes etc automatically.

Plugin used:

-   https://www.gatsbyjs.org/packages/gatsby-image/
-   https://codebushi.com/using-gatsby-image/
-   https://using-gatsby-image.gatsbyjs.org/
-   https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/

SVGs:

-   Under `src/assets/images/svg`
-   Loaded using a require call and a specific Webpack loader (requires a tslint ignore)

## TODO

-   Add Team page
-   Audit with Lighthouse: https://developers.google.com/web/tools/lighthouse/
    -   Automate Lighthouse
-   Add sitemap: https://www.npmjs.com/package/gatsby-plugin-sitemap
-   Add news support
    ** https://github.com/gatsbyjs/gatsby-starter-blog
    ** markdown support
    ** remark
    ** https://github.com/gatsbyjs/gatsby/tree/master/examples/using-remark
    \*\* https://www.npmjs.com/package/gatsby-remark-responsive-iframe
-   Google analytics: gatsby-plugin-google-analytics
-   SEO: https://www.gatsbyjs.org/docs/add-seo-component/
-   Improve 404, add image and text
    ** link \*** import {Link} from 'gatsby';
    \*\*\* <Link to="/" className="logo"><strong>DeveloPassion</strong></Link>
-   GDPR and privacy policy
-   i18n: https://www.npmjs.com/package/gatsby-plugin-i18n
-   Add GreenKeeper
-   test fontAlternative with Hack font: https://github.com/source-foundry/Hack/blob/master/docs/WEBFONT_USAGE.md
-   add ARIA labels
-   add keyboard support on services page (go from one block to the next)
-   Condense a bit (reduce top/bottom margins on desktop)

Blocked by domain acquisition:

-   Enable GH pages: https://github.com/DeveloPassion/website/settings
-   Create GH pages branch
-   Build: push public/ to GH pages branch
-   Sec headers (CloudFlare)

Blocked by Gatsby:

-   CSP
-   PWA
    ** https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/
    ** https://github.com/gatsbyjs/gatsby/issues/10036

Other:

-   Add "tslint-sonarts", to tslint.json once this is fixed: https://github.com/AdamLeBlanc/gatsby-plugin-ts-loader/issues/2
    -   and adapt package.json tslint script
    -   and remove tslint-npm.json
-   inspiration
    -   https://github.com/scttcper/gatsby-casper (reading time, tag page, subscribe, author page)
-   Check pagespeed: https://developers.google.com/speed/pagespeed/insights/
-   Add typechecking for graphql queries: https://www.gatsbyjs.org/docs/static-query/
    \*\* do it using io-ts
-   Add testing: https://www.gatsbyjs.org/docs/testing/
