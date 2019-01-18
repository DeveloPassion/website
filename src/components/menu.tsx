import * as React from 'react';

import {createPropsGetter, DefaultProps} from "@martin_hotell/rex-tils";

import {Link} from 'gatsby';

export type MenuProps = {
  onToggleMenu: () => void
} & DefaultProps<typeof defaultMenuProps>

export const defaultMenuProps = DefaultProps({
});

const getProps = createPropsGetter(defaultMenuProps);

export default class Menu extends React.Component<MenuProps, {}> {

  public static readonly defaultProps = defaultMenuProps;

  public render() {
    const {
      onToggleMenu: toggleMenu
    } = getProps(this.props);
    
    return (
      <nav className="menu">
        <div className="inner">
          <ul className="links">
            <li><Link onClick={toggleMenu} to="/">Home</Link></li>
            <li><Link onClick={toggleMenu} to="/news">News</Link></li>
            <li><Link onClick={toggleMenu} to="/services">Services</Link></li>
            <li><Link onClick={toggleMenu} to="/about">About</Link></li>
            <li><Link onClick={toggleMenu} to="/team">Team</Link></li>
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
