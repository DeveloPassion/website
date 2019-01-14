import * as React from 'react';

import Layout from '../components/layout';

// FIXME change export default
// -> maybe also switch to class
const NotFoundPage = () => (
  <Layout>
    <div className="main alt">
        <section id="one">
            <div className="inner">
                <h1>Page not found :(</h1>
                <p>The page you were looking for could not be found, sorry!</p>
              <p>Why don't you go back <a href="/">home</a>?</p>
            </div>
        </section>
    </div>
  </Layout>
);

export default NotFoundPage
