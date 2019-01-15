import * as React from 'react';

import Helmet from 'react-helmet';

import Layout from '../components/layout';

// tslint:disable-next-line
import DeveloPassionWideLogo from '!svg-react-loader?name=DeveloPassionLogo!../assets/images/svg/developassion-logo.svg';

import {Link} from "gatsby";

export default () => (
  <Layout>
    <Helmet>
      <title>About DeveloPassion</title>
      <meta name="description" content="Information about the DeveloPassion company"/>
    </Helmet>

    <div className="main alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About</h1>
          </header>
          <span className="image about"><DeveloPassionWideLogo/></span>
          <p>
            <strong>DeveloPassion</strong> is a Belgian IT consultancy firm, specialized in:
          </p>
          <ul>
            <li>Software development</li>
            <li>Software architecture</li>
            <li>Digital transformation and innovation</li>
            <li>Software and infrastructure security hardening</li>
            <li>Agile project and team management</li>
          </ul>

          <p>If you are looking for passionate partners to assist you, then look no further and <a href="#contact">get
            in touch with us!</a></p>

          <h2>Our company values</h2>
            <ul>
              <li><strong>Transparency</strong> is important to us. Only through it can we best collaborate.</li>
              <li><strong>Openness</strong> is part of our philosophy. We strongly believe in <strong>Free and Open Source Software
                (FOSS)</strong>,
                for the benefit of all.
              </li>
              <li><strong>Craftsmanship</strong> means a lot to us. Our craft is an art that needs to be mastered in
                order to produce the
                high quality results that you expect.
              </li>
              <li><strong>Passion</strong> is our main driver and it requires <strong>dedication</strong>. Together, they push us farther day after day.
              </li>
              <li><strong>Reliability</strong> is critical to establish trust and we deeply care about it.</li>
              <li>We think that all relationships require <strong>respect</strong>, <strong>kindness</strong> and <strong>care</strong>.</li>
            </ul>
            Finally, we believe that teams are most productive when they have <strong>fun</strong>. We keep a positive attitude, no matter what!
          <p><Link to="/services" className="button fit">Learn more...</Link></p>
        </div>
      </section>
    </div>

  </Layout>
);
