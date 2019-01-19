import * as React from 'react';

// tslint:disable-next-line
import DeveloPassionLogo from '!svg-react-loader?name=DeveloPassionLogo!../assets/images/svg/developassion-logo.svg';

import metadata from "../metadata.json";

export default class Contact extends React.Component<any, {}> {

  public render() {
    return (
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
                  <a href={`mailto:${metadata.contact.mail}`}>{metadata.contact.mail}</a>
                </div>
              </section>
              <section className="contact-method-wrapper">
                <div className="contact-method">
                  <span className="icon alt fa-phone" />
                  <h3>Phone</h3>
                  <span><a
                    href={`callto:${metadata.contact.phoneRaw}`}>{metadata.contact.phone}</a></span>
                </div>
              </section>
              <section className="contact-method-wrapper">
                <div className="contact-method">
                  <span className="icon alt fa-home" />
                  <h3>Headquarters</h3>
                  <span>
                    {metadata.address.postalCode}, {metadata.address.city}<br/>
                    {metadata.address.country}
                    </span>
                </div>
              </section>
            </section>
          </div>
        </section>
      )}
}
