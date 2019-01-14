import * as React from 'react';

import Helmet from 'react-helmet';

import {Link} from 'gatsby';

import Banner from '../components/banner';
import Layout from '../components/layout';

import path = require('../assets/images/path.jpg');
import team01 = require('../assets/images/team01.jpg');

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <title>DeveloPassion</title>
      <meta name="description" content="DeveloPassion. Passion makes all the difference."/>
      <meta name="keywords" content="developassion, software, development, architecture, web"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="canonical" href="https://www.developassion.be/robots.txt"/>
    </Helmet>

    <Banner/>

    <div className="main">
      <section id="one" className="tiles">
        <article style={{backgroundImage: `url(${path})`}}>
          <header className="major">
            <h3>About DeveloPassion</h3>
            <p>Learn more about our company.</p>
          </header>
          <Link to="/about" className="link primary" />
        </article>
        <article style={{backgroundImage: `url(${team01})`}}>
          <header className="major">
            <h3>Services</h3>
            <p>Discover our services.</p>
          </header>
          <Link to="/services" className="link primary" />
        </article>
      </section>
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>News</h2>
          </header>
          <p>Discover what we've been up to recently!</p>
          <ul className="actions">
            <li><Link to="/news" className="button next">Read ...</Link></li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);
