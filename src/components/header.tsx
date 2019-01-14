import * as React from 'react';

import {Link} from 'gatsby';
import * as t from 'io-ts';
import {props} from 'prop-types-ts';

// runtime types
// ref: https://github.com/gcanti/prop-types-ts
export const HeaderRuntimeProps = t.interface({
  onToggleMenu: t.any // FIXME define type
}, 'HeaderRuntimeProps');

// extract the static type
export type HeaderProps = t.TypeOf<typeof HeaderRuntimeProps>

@props(HeaderRuntimeProps)
export default class Header extends React.Component<HeaderProps, {}> {

  public render() {
    return (
      <header className="header alt">
        <Link to="/" className="logo"><strong><span className="logoHome icon fa-icon fa-home" />DeveloPassion</strong></Link>
        <nav>
          <a className="menu-link" onClick={this.props.onToggleMenu} href="javascript:">Menu</a>
        </nav>
      </header>
    );
  }
}
