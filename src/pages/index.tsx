import * as React from 'react';

import Helmet from 'react-helmet';

import {Link} from 'gatsby';

import NonStretchedImage from "../components/non-stretched-image";

import {graphql} from "gatsby";

import Banner from '../components/banner';
import Layout from '../components/layout';
import {backgroundImage} from "../utils/images";

export default ({data}:any) => {
  // tslint:disable-next-line:no-console
  console.log(`
______                   _        ______                 _               
|  _  \\                 | |       | ___ \\               (_)              
| | | | ___ __   __ ___ | |  ___  | |_/ /__ _  ___  ___  _   ___   _ __  
| | | |/ _ \\\\ \\ / // _ \\| | / _ \\ |  __// _\` |/ __|/ __|| | / _ \\ | '_ \\ 
| |/ /|  __/ \\ V /|  __/| || (_) || |  | (_| |\\__ \\\\__ \\| || (_) || | | |
|___/  \\___|  \\_/  \\___||_| \\___/ \\_|   \\__,_||___/|___/|_| \\___/ |_| |_|
                                                                         
                                                                         
Because passion makes all the difference.
`);
  return (
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,600,600italic" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kaushan+Script" />
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
            <Link to="/about" className="link primary" title="About" aria-label="About" />
          </article>
          <article>
            <NonStretchedImage fluid={data.imageServices.childImageSharp.fluid} style={backgroundImage} />
            <header className="major">
              <h3>Services</h3>
              <p>Discover our services.</p>
            </header>
            <Link to="/services" className="link primary" title="Services" aria-label="Services" />
          </article>
          <article>
            <NonStretchedImage fluid={data.imageTeam.childImageSharp.fluid} style={backgroundImage} />
            <header className="major">
              <h3>Team</h3>
              <p>Meet our team.</p>
            </header>
            <Link to="/team" className="link primary" title="Team" aria-label="Team" />
          </article>
          <article>
            <NonStretchedImage fluid={data.imageNews.childImageSharp.fluid} style={backgroundImage} />
            <header className="major">
              <h3>News</h3>
              <p>Discover what we've been up to recently!</p>
            </header>

            <Link to="/news" className="link primary" title="News" aria-label="News" />
          </article>
        </section>
        {/*
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>News</h2>
          </header>
          
          <ul className="actions">
            <li><Link to="/news" className="button next" title="News" aria-label="News">Go!</Link></li>
          </ul>
        </div>
      </section>
      */}
      </div>
    </Layout>
  );
}

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
    imageTeam:file(relativePath: { eq: "team02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageNews:file(relativePath: { eq: "news.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
