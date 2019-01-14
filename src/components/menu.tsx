import * as React from 'react';

import {Link} from 'gatsby';

import * as t from 'io-ts';
import {props} from 'prop-types-ts';

// runtime types
export const MenuRuntimeProps = t.interface({
  onToggleMenu: t.any // FIXME define type
}, 'MenuRuntimeProps');

// extract the static type
export type MenuProps = t.TypeOf<typeof MenuRuntimeProps>

@props(MenuRuntimeProps)
export default class Menu extends React.Component<MenuProps, {}> {

  /*
  constructor(props: MenuProps) {
    super(props);
  }
  */

  public render() {
    return (
      <nav className="menu">
        <div className="inner">
          <ul className="links">
            <li><Link onClick={this.props.onToggleMenu} to="/">Home</Link></li>
            <li><Link onClick={this.props.onToggleMenu} to="/news">News</Link></li>
            <li><Link onClick={this.props.onToggleMenu} to="/services">Services</Link></li>
            <li><Link onClick={this.props.onToggleMenu} to="/about">About</Link></li>
          </ul>
          <ul className="actions vertical">
            {/*
            <li><a href="#contact" onClick={this.props.onToggleMenu} className="button special fit">Contact us!</a></li>
            */}
            <li><a href="#contact" onClick={this.props.onToggleMenu} className="button fit">Contact us!</a></li>
          </ul>
        </div>
        <a className="close" onClick={this.props.onToggleMenu} href="javascript:">Close</a>
      </nav>
    );
  }
}
