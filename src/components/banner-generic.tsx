import * as React from 'react';

import {createPropsGetter, DefaultProps} from "@martin_hotell/rex-tils";

export type BannerProps = {
  className: string,
  subtitle: string,
  title: string,
} & DefaultProps<typeof defaultBannerProps>

export const defaultBannerProps = DefaultProps({
});

const getProps = createPropsGetter(defaultBannerProps);

export default class BannerGeneric extends React.Component<BannerProps, {}> {

  public static readonly defaultProps = defaultBannerProps;
  
  public render() {

    const {
      className,
      title,
      subtitle
    } = getProps(this.props);
    
    return (
      <section className={`banner ${className}`}>
        <div className="inner">
          <header className="major">
            <h1>{title}</h1>
          </header>
          <div className="content">
            <p>{subtitle}</p>
          </div>
        </div>
      </section>
    );
  }
}
