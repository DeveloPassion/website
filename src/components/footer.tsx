import * as React from 'react';

// FIXME those imports MUST remain separate due to: https://github.com/AdamLeBlanc/gatsby-plugin-ts-loader/issues/1 
import {graphql} from 'gatsby';
import {Link, StaticQuery} from 'gatsby';

export default class Footer extends React.Component<any, {}> {

  public render() {
    return (
      <StaticQuery query={query} render={(data: any) => (
        <footer className="footer">
          <div className="inner">
            <ul className="icons">
              <li><a href={data.site.siteMetadata.social.twitter}
                     className="icon alt fa-twitter" target="_blank" rel="noreferrer" title="DeveloPassion @ Twitter"><span
                className="label">Twitter</span></a></li>
              <li><a href={data.site.siteMetadata.social.github} className="icon alt fa-github"
                     target="_blank" rel="noreferrer" title="DeveloPassion @ GitHub"><span
                className="label">GitHub</span></a></li>
              <li><a href={data.site.siteMetadata.social.linkedIn} className="icon alt fa-linkedin"
                     target="_blank" rel="noreferrer" title="DeveloPassion @ LinkedIn"><span className="label">LinkedIn</span></a></li>
              <li><a href={data.site.siteMetadata.social.facebook}
                     className="icon alt fa-facebook" target="_blank" rel="noreferrer" title="DeveloPassion @ Facebook"><span
                className="label">Facebook</span></a></li>
              <li><a href={data.site.siteMetadata.social.medium} className="icon alt fa-medium"
                     target="_blank" rel="noreferrer" title="DeveloPassion @ Medium"><span className="label">Medium</span></a></li>
              <li><a href={data.site.siteMetadata.social.slack} className="icon alt fa-slack"
                     target="_blank" rel="noreferrer" title="DeveloPassion @ Slack"><span className="label">Slack</span></a></li>
              <li><a href={data.site.siteMetadata.social.youtube} className="icon alt fa-youtube"
                     target="_blank" rel="noreferrer" title="DeveloPassion @ YouTube"><span className="label">YouTube</span></a></li>
              <li className="quote"><br/>
                <blockquote>{this.getRandomElement(data.site.siteMetadata.quotes)}</blockquote>
              </li>
            </ul>
            <ul className="copyright">
              <li>&copy; {new Date().getFullYear()} DeveloPassion SPRL</li>
              <li>TVA/VAT: {data.site.siteMetadata.tva}</li>
              <li><a href={data.site.siteMetadata.siteSources} className="icon alt fa-github fa-xs" target="_blank" rel="noreferrer" title="DeveloPassion's Website sources"/>
              </li>
              <li><a href={data.site.siteMetadata.social.twitterSebastien} target="_blank" rel="noreferrer" title="dSebastien @ Twitter">dSebastien</a></li>
              <li><Link to="/terms">Terms and conditions (Conditions générales)</Link></li>
            </ul>
          </div>
        </footer>)}/>
    )
  }

  public getRandomElement(array: ReadonlyArray<string>): string {
    if (!array) {
      return ''; // oops :)
    }
    return array[Math.floor(Math.random() * array.length)];
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        quotes
        siteSources
        social {
          facebook
          github
          linkedIn
          medium
          slack
          twitter
          twitterSebastien
          youtube
        }
        tva
      }
    }
  }
`;
