import * as React from 'react';

import {Link} from "gatsby";

import Layout from '../components/layout';

export default () => (
  <Layout>
    <div className="main alt">
        <section id="one">
            <div className="inner">
                <h1>Page not found :(</h1>
                <p>The page you were looking for could not be found, sorry!</p>
              <p>Why don't you go back?</p>
              <p><Link to="/" className="button fit" aria-label="Home">HOME</Link></p>
            </div>
        </section>
    </div>
  </Layout>
);
