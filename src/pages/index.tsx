import * as React from 'react';

import Helmet from 'react-helmet';

import {Link} from 'gatsby';

import NonStretchedImage from "../components/non-stretched-image";

import {graphql} from "gatsby";

import Banner from '../components/banner';
import Layout from '../components/layout';
import {backgroundImage} from "../utils/images";

export default ({data}:any) => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <title>DeveloPassion</title>
      <meta name="description" content="DeveloPassion. Passion makes all the difference."/>
      <meta name="keywords" content="developassion, software, development, architecture, web"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="canonical" href="https://www.developassion.be/robots.txt"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
    </Helmet>

    <Banner/>

    <div className="main">
      <section id="one" className="tiles">
        <article>
          <NonStretchedImage fluid={data.imagePassion.childImageSharp.fluid} style={backgroundImage} />
          <header className="major">
            <h3>About DeveloPassion</h3>
            <p>Learn more about our company.</p>
          </header>
          <Link to="/about" className="link primary" title="About" />
        </article>
        <article>
          <NonStretchedImage fluid={data.imageServices.childImageSharp.fluid} style={backgroundImage} />
          <header className="major">
            <h3>Services</h3>
            <p>Discover our services.</p>
          </header>
          <Link to="/services" className="link primary" title="Services" />
        </article>
      </section>
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>News</h2>
          </header>
          <p>Discover what we've been up to recently!</p>
          <ul className="actions">
            <li><Link to="/news" className="button next" title="News">Read ...</Link></li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    imagePassion:file(relativePath: { eq: "passion.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageServices:file(relativePath: { eq: "consultancy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
