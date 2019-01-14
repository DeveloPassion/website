import * as React from 'react';

// FIXME those imports MUST remain separate due to: https://github.com/AdamLeBlanc/gatsby-plugin-ts-loader/issues/1 
import {graphql} from 'gatsby';
import {StaticQuery} from 'gatsby';

// tslint:disable-next-line
import DeveloPassionLogo from '!svg-react-loader?name=DeveloPassionLogo!../assets/images/svg/developassion-logo.svg';

export default class Contact extends React.Component<any, {}> {

  public render() {
    return (
      <StaticQuery query={graphql`
        query {
          file(relativePath: { eq: "developassion-logo-hq-larger.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1280, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
          site {
            siteMetadata {
              contact {
                mail
                phone
                phoneRaw
              }
              address {
                postalCode
                city
                country
              }
            }
          }
        }
`} render={(data: any) => (
        <section id="contact">
          <div className="inner">
            <section className="contact-logo">
              <DeveloPassionLogo />
            </section>
            <section className="split">
              <section className="contact-method-wrapper">
                <div className="contact-method">
                  <span className="icon alt fa-envelope"></span>
                  <h3>Email</h3>
                  <a href={`mailto:${data.site.siteMetadata.contact.mail}`}>{data.site.siteMetadata.contact.mail}</a>
                </div>
              </section>
              <section className="contact-method-wrapper">
                <div className="contact-method">
                  <span className="icon alt fa-phone"></span>
                  <h3>Phone</h3>
                  <span><a
                    href={`callto:${data.site.siteMetadata.contact.phoneRaw}`}>{data.site.siteMetadata.contact.phone}</a></span>
                </div>
              </section>
              <section className="contact-method-wrapper">
                <div className="contact-method">
                  <span className="icon alt fa-home"></span>
                  <h3>Headquarters</h3>
                  <span>{/* {data.site.siteMetadata.address.street}, {data.site.siteMetadata.address.number}<br/> */}
                    {data.site.siteMetadata.address.postalCode}, {data.site.siteMetadata.address.city}<br/>
                    {data.site.siteMetadata.address.country}
                    </span>
                </div>
              </section>
            </section>
          </div>
        </section>
      )}/>
    )
  }
}
