import * as React from 'react';

import * as t from 'io-ts';
import {props} from 'prop-types-ts';

// runtime types
// ref: https://github.com/gcanti/prop-types-ts
export const BannerGenericRuntimeProps = t.interface({
  className: t.string,
  subtitle: t.string,
  title: t.string,
}, 'BannerGenericRuntimeProps');

// extract the static type
export type BannerGenericProps = t.TypeOf<typeof BannerGenericRuntimeProps>

@props(BannerGenericRuntimeProps)
export default class BannerGeneric extends React.Component<BannerGenericProps, {}> {
  public render() {
    return (
      <section className={`banner ${this.props.className}`}>
        <div className="inner">
          <header className="major">
            <h1>{this.props.title}</h1>
          </header>
          <div className="content">
            <p>{this.props.subtitle}</p>
          </div>
        </div>
      </section>
    );
  }
}
