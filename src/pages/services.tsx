import * as React from 'react';

import Helmet from 'react-helmet';

import {graphql} from "gatsby";

import BannerGeneric from '../components/banner-generic';
import Layout from '../components/layout';

import NonStretchedImage from "../components/non-stretched-image";

export default ({data}:any) => (
  <Layout>
        <Helmet>
          <title>DeveloPassion Services</title>
          <meta name="description" content="Services"/>
        </Helmet>

        <BannerGeneric className="class2" title="Services" subtitle="DeveloPassion is great at..."/>

        <div className="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h2 id="services-it-consultancy">IT Consultancy</h2>
              </header>
              <p>
                DeveloPassion provides IT Consultancy services in and around Belgium.
              </p>
              <p>
                We have a broad expertise in modern and secure software development that we can leverage to implement solutions tailored to your needs.<br />
                Whether you need assistance for a mission-critical back-end system, a complex front-end Web application, a mobile application or a
                Website for your brand, we can help you get the competitive edge that you need.
              </p>
              <p>If you are looking for passionate partners to assist you, then look no further and <a href="#contact" aria-label="Get in touch with us!">get
                in touch with us!</a></p>
              <p><a href="#services-software-development" className="button fit" aria-label="Learn more">Learn more...</a></p>
            </div>
          </section>

          <section id="services-software-development" className="spotlights">
            <section>
              <span className="image">
                <NonStretchedImage fluid={data.imageDevelopment.childImageSharp.fluid} alt="Software Development" />
              </span>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Software Development</h3>
                  </header>
                  <p>
                    More than anything else, <strong>DeveloPassion is a software development company at heart</strong>.<br/>
                    We deeply care about our craft and even more so about the quality of what we deliver.<br />
                    We dream about code every night and we spend our days thinking about programming and technology.
                  </p>
                </div>
              </div>
            </section>

            <section id="services-software-architecture">
              <span className="image">
                <NonStretchedImage fluid={data.imageArchitecture.childImageSharp.fluid} alt="Software and enterprise architecture" />
              </span>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Software and enterprise architecture</h3>
                  </header>
                  <p>Our background in software architecture allows us to clearly see the broader picture and find the best solutions.<br />
                    We have <strong>experience with large IT environments</strong> and everything that is inherent to them.</p>
                </div>
              </div>
            </section>

            <section id="services-digital-transformation">
              <span className="image">
                <NonStretchedImage fluid={data.imageDigital.childImageSharp.fluid} alt="Digital transformation and innovation" />
              </span>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Digital transformation and innovation</h3>
                  </header>
                  <p>We are <strong>digital natives</strong>, always interested in adapting experiences to the digital world. We are also <strong>innovators</strong>, ready to embrace the newest technologies and put them to good use.<br />We can assist you to modernize your IT environment, make legacy applications evolve and bring your services into the digital era where clients are waiting for them.</p>
                </div>
              </div>
            </section>

            <section id="services-security-hardening">
              <span className="image">
                <NonStretchedImage fluid={data.imageSecurity.childImageSharp.fluid} alt="Software and infrastructure security hardening" />
              </span>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Software and infrastructure security hardening</h3>
                  </header>
                  <p>Our team has spent <strong>years</strong> working for the <strong>financial sector</strong>. We have secured infrastructure as well as back-end and front-end software systems. This allows us to clearly understand the security risks that your IT systems are facing every day.<br />We also have a <strong>deep interest in IT security</strong> and always keep an eye on the evolutions of the threat landscape.</p>
                </div>
              </div>
            </section>

            <section id="services-agile-pm">
              <span className="image">
                <NonStretchedImage fluid={data.imageAgile.childImageSharp.fluid} alt="Agile project and team management" />
              </span>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Agile project and team management</h3>
                  </header>
                  <p>We have a <strong>solid experience in team organization and team management</strong>. We <strong>love</strong> building hyper-productive groups while creating a <strong>positive</strong>, <strong>motivating</strong> and <strong>fun</strong> work environment.<br />We are agilists, and, as such, we fully adhere to the <a href="https://agilemanifesto.org/" title="Agile manifesto" aria-label="Agile manifesto">agile manifesto</a>. We also share the ideas of the <strong><a href="https://twitter.com/hashtag/NoEstimates">#NoEstimates</a></strong> movement. Instead of playing with numbers, we prefer to <strong>focus on delivering quality products iteratively</strong>, always focusing on delivering the most value.</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </Layout>
    );

export const query = graphql`
  query {
    imageArchitecture:file(relativePath: { eq: "architecture01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageDigital:file(relativePath: { eq: "digital02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageDevelopment:file(relativePath: { eq: "keyboard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageSecurity:file(relativePath: { eq: "security.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageAgile:file(relativePath: { eq: "planning.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
