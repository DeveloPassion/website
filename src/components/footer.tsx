import * as React from 'react';

import {Link} from 'gatsby';

import metadata from "../metadata.json";

export default class Footer extends React.Component<any, {}> {

  public render() {
    return (
        <footer className="footer">
          <div className="inner">
            <ul className="icons">
              <li><a href={metadata.social.twitter}
                     className="icon alt fa-twitter" target="_blank" rel="noreferrer" title="DeveloPassion @ Twitter" aria-label="DeveloPassion @ Twitter"><span
                className="label">Twitter</span></a></li>
              <li><a href={metadata.social.github} className="icon alt fa-github"
                     target="_blank" rel="noreferrer" title="DeveloPassion @ GitHub" aria-label="DeveloPassion @ GitHub"><span
                className="label">GitHub</span></a></li>
              <li><a href={metadata.social.linkedIn} className="icon alt fa-linkedin"
                     target="_blank" rel="noreferrer" title="DeveloPassion @ LinkedIn" aria-label="DeveloPassion @ LinkedIn"><span className="label">LinkedIn</span></a></li>
              <li><a href={metadata.social.facebook}
                     className="icon alt fa-facebook" target="_blank" rel="noreferrer" title="DeveloPassion @ Facebook" aria-label="DeveloPassion @ Facebook"><span
                className="label">Facebook</span></a></li>
              <li><a href={metadata.social.medium} className="icon alt fa-medium"
                     target="_blank" rel="noreferrer" title="DeveloPassion @ Medium" aria-label="DeveloPassion @ Medium"><span className="label">Medium</span></a></li>
              <li><a href={metadata.social.slack} className="icon alt fa-slack"
                     target="_blank" rel="noreferrer" title="DeveloPassion @ Slack" aria-label="DeveloPassion @ Slack"><span className="label">Slack</span></a></li>
              <li><a href={metadata.social.youtube} className="icon alt fa-youtube"
                     target="_blank" rel="noreferrer" title="DeveloPassion @ YouTube" aria-label="DeveloPassion @ YouTube"><span className="label">YouTube</span></a></li>
              <li className="quote"><br/>
                <blockquote>{this.getRandomElement(metadata.quotes)}</blockquote>
              </li>
            </ul>
            <ul className="copyright">
              <li>&copy; {new Date().getFullYear()} DeveloPassion SPRL</li>
              <li>TVA/VAT: {metadata.tva}</li>
              <li><a href={metadata.siteSources} className="icon alt fa-github fa-xs" target="_blank" rel="noreferrer" title="DeveloPassion's Website sources" aria-label="DeveloPassion's Website sources"/>
              </li>
              <li><a href={metadata.social.twitterSebastien} target="_blank" rel="noreferrer" title="dSebastien @ Twitter" aria-label="dSebastien @ Twitter">dSebastien</a></li>
              <li><Link to="/terms" aria-label="Terms and conditions">Terms and conditions (Conditions générales)</Link></li>
            </ul>
          </div>
        </footer>
    )
  }

  public getRandomElement(array: ReadonlyArray<string>): string {
    if (!array) {
      return ''; // oops :)
    }
    return array[Math.floor(Math.random() * array.length)];
  }
}
