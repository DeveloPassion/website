import * as React from 'react';

import {Link} from 'gatsby';

interface HeaderProps {
  onToggleMenu: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="header alt">
      <Link to="/" className="logo" aria-label="Home"><strong><span className="logoHome icon fa-icon fa-home" />DeveloPassion</strong></Link>
      <nav>
        <a className="menu-link" onClick={props.onToggleMenu} aria-label="Menu">Menu</a>
      </nav>
    </header>
  );
};

export default Header;
