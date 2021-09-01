import * as React from 'react';
import { Helmet } from 'react-helmet';
import {graphql} from "gatsby";
import BannerGeneric from '../components/banner-generic';
import Layout from '../components/layout';
import {StaticImage} from "gatsby-plugin-image";

export default ({data}:any) => (
  <Layout>
    <Helmet>
      <title>DeveloPassion's Team</title>
      <meta name="description" content="DeveloPassion's Team"/>
    </Helmet>

    <BannerGeneric className="class2" title="Team" subtitle="Meet the team..."/>

    <div className="main team">
      <section id="one">
        <div className="inner">
          <p>If you are looking for passionate partners to assist you, then look no further and <a href="#contact" aria-label="Get in touch with us!">get
            in touch with us!</a></p>
          <p><a href="#team-sebastien-dubois" className="button fit" aria-label="Learn more...">Learn more...</a></p>
        </div>
      </section>

      <section id="sebastien-dubois" className="spotlights">
        <section>
              <span className="image">
                <StaticImage src="../assets/images/sebastien.png" alt="Sébastien Dubois" />
              </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sébastien Dubois - <strong>Founder</strong></h3>
              </header>
              <span>Favourite quote (knowing that he has three children):</span>
              <blockquote>Patience is a virtue.</blockquote>
              <p>
                Sébastien is a <strong>passionate</strong> software <strong>craftsman</strong> and <strong>open source contributor</strong> with many years of experience as <strong>senior full-stack developer</strong>, <strong>software architect</strong> and technical <strong>team leader</strong>.
              </p>
              <p>
                Sébastien has worked for a long time in the finance industry where he has led large software development and infrastructure projects.
              </p>
              <p>
                Over the years, he has been working on back-end systems, APIs, frameworks, Web applications and software architecture for large financial institutions in Belgium using different languages such as Java, TypeScript, JavaScript, Go, Python, Bash, C# and PHP, which gives him a broad perspective on modern software development. Sébastien also has a deep interest in IT security, its human factors and how (more) secure software can be built.
              </p>
              <ul className="icons">
                <li><a href={data.site.siteMetadata.social.linkedInSebastien}
                       className="icon fa-linkedin" target="_blank" rel="noreferrer" title="Sebastien @ LinkedIn" aria-label="Sebastien @ LinkedIn"><span
                  className="label">LinkedIn</span></a></li>
                <li><a href={data.site.siteMetadata.social.twitterSebastien}
                   className="icon fa-twitter fa-xs" target="_blank" rel="noreferrer" title="Sebastien @ Twitter" aria-label="Sebastien @ Twitter"><span
                  className="label">Twitter</span></a></li>
                <li><a href={data.site.siteMetadata.social.githubSebastien}
                       className="icon fa-github" target="_blank" rel="noreferrer" title="Sebastien @ Github" aria-label="Sebastien @ Github"><span
                  className="label">GitHub</span></a></li>
                <li><a href={data.site.siteMetadata.social.mediumSebastien}
                       className="icon fa-medium" target="_blank" rel="noreferrer" title="Sebastien @ Medium" aria-label="Sebastien @ Medium"><span
                  className="label">Medium</span></a></li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

export const query = graphql`{
  site {
    siteMetadata {
      social {
        githubSebastien
        linkedInSebastien
        mediumSebastien
        twitterSebastien
      }
    }
  }
}
`;
