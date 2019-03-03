import * as React from 'react';

import {createPropsGetter, DefaultProps} from "@martin_hotell/rex-tils";
import {defaultMenuProps} from "./menu";

import {Link} from 'gatsby';

export type HeaderProps = {
  onToggleMenu: () => void
} & DefaultProps<typeof defaultHeaderProps>

export const defaultHeaderProps = DefaultProps({
});

const getProps = createPropsGetter(defaultMenuProps);

export default class Header extends React.Component<HeaderProps, {}> {

  public static readonly defaultProps = defaultHeaderProps;
  
  public render() {
    const {
      onToggleMenu: toggleMenu
    } = getProps(this.props);
    
    return (
      <header className="header alt">
        <Link to="/" className="logo" aria-label="Home"><strong><span className="logoHome icon fa-icon fa-home" />DeveloPassion</strong></Link>
        <nav>
          <a className="menu-link" onClick={toggleMenu} href="javascript:" aria-label="Menu">Menu</a>
        </nav>
      </header>
    );
  }
}
