import * as React from 'react';

import Helmet from 'react-helmet';

import Layout from '../components/layout';
import NonStretchedImage from "../components/non-stretched-image";

import {graphql} from "gatsby";

export default ({data}: any) => (
  <Layout>
    <Helmet>
      <title>DeveloPassion - Generic</title>
      <meta name="description" content="Generic Page"/>
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Generic</h1>
          </header>
          <span className="image main"><NonStretchedImage fluid={data.file.childImageSharp.fluid}/></span>
          <p>Hello world.</p>
        </div>
      </section>
    </div>

  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "pic11.jpg" }) {
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
