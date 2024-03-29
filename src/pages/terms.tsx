import * as React from 'react';

import { Helmet } from 'react-helmet';

import Layout from '../components/layout';

import {graphql} from "gatsby";

export default ({data}: any) => (
  <Layout>
    <Helmet>
      <title>DeveloPassion - Terms and conditions</title>
      <meta name="description" content="DeveloPassion SRL terms and conditions"/>
    </Helmet>

    <div className="main alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Terms and conditions (Conditions générales)</h1>
          </header>
          <ul>
            <li>Version: {data.site.siteMetadata.terms.version}</li>
            <li>Last update: {data.site.siteMetadata.terms.lastUpdate}</li>
          </ul>

          <a href={data.site.siteMetadata.terms.fr} aria-label="Télécharger les conditions générales">Télécharger les conditions générales</a>
        </div>
      </section>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        terms {
          lastUpdate
          fr
          version
        }
      }
    }
  }
`;
