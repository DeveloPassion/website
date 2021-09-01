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
            <li><Link onClick={toggleMenu} to="/" aria-label="Home">Home</Link></li>
            <li><a href="https://dsebastien.net/news" onClick={toggleMenu} aria-label="News">News</a></li>
            <li><Link onClick={toggleMenu} to="/services" aria-label="Services">Services</Link></li>
            <li><Link onClick={toggleMenu} to="/about" aria-label="About">About</Link></li>
            <li><Link onClick={toggleMenu} to="/team" aria-label="Team">Team</Link></li>
          </ul>
          <ul className="actions vertical">
            <li><a href="#contact" onClick={this.props.onToggleMenu} className="button fit" aria-label="Contact us">Contact us!</a></li>
          </ul>
        </div>
        <a className="close" onClick={this.props.onToggleMenu} aria-label="Close">Close</a>
      </nav>
    );
  }
}
