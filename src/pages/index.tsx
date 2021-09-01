import * as React from 'react';
import Banner from '../components/banner';
import Layout from '../components/layout';
import {Link} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {Helmet} from 'react-helmet';

export default () => {
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
            <StaticImage src="../assets/images/passion.jpg" className="backgroundImg" alt="About" />
            <header className="major">
              <h3>About DeveloPassion</h3>
              <p>Learn more about our company.</p>
            </header>
            <Link to="/about" className="link primary" title="About" />
          </article>
          <article>
            <StaticImage src="../assets/images/consultancy.jpg" className="backgroundImg" alt="Services" />
            <header className="major">
              <h3>Services</h3>
              <p>Discover our services.</p>
            </header>
            <Link to="/services" className="link primary" title="Services"  />
          </article>
          <article>
            <StaticImage src="../assets/images/team02.jpg" className="backgroundImg" alt="Team" />
            <header className="major">
              <h3>Team</h3>
              <p>Meet our team.</p>
            </header>
            <Link to="/team" className="link primary" title="Team" />
          </article>
        </section>
      </div>
    </Layout>
  );
}
