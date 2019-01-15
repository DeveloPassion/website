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
        <section id="contact" className="contact">
          <div className="inner">
            <section className="contact-logo">
              <DeveloPassionLogo />
            </section>
            <section className="split">
              <section className="contact-method-wrapper">
                <div className="contact-method">
                  <span className="icon alt fa-envelope" />
                  <h3>Email</h3>
                  <a href={`mailto:${data.site.siteMetadata.contact.mail}`}>{data.site.siteMetadata.contact.mail}</a>
                </div>
              </section>
              <section className="contact-method-wrapper">
                <div className="contact-method">
                  <span className="icon alt fa-phone" />
                  <h3>Phone</h3>
                  <span><a
                    href={`callto:${data.site.siteMetadata.contact.phoneRaw}`}>{data.site.siteMetadata.contact.phone}</a></span>
                </div>
              </section>
              <section className="contact-method-wrapper">
                <div className="contact-method">
                  <span className="icon alt fa-home" />
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
