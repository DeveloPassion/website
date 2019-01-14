import * as React from 'react';

import Helmet from 'react-helmet';

import Layout from '../components/layout';
import NonStretchedImage from "../components/non-stretched-image";

import {graphql} from "gatsby";

export default ({ data }: any) => (
  <Layout>
    <Helmet>
      <title>DeveloPassion's News</title>
      <meta name="description" content="News of the DeveloPassion company" />
    </Helmet>

    <div className="main alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>News</h1>
          </header>
          <span className="image main"><NonStretchedImage fluid={data.file.childImageSharp.fluid} /></span>
          <p>Coming soon...</p>
        </div>
      </section>
    </div>

  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "green02.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
