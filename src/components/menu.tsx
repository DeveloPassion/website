import * as React from 'react';

import {Link} from 'gatsby';

interface MenuProps {
  onToggleMenu: () => void;
}

const Menu = (props: MenuProps) => {
  return (
    <nav className="menu">
      <div className="inner">
        <ul className="links">
          <li><Link onClick={props.onToggleMenu} to="/" aria-label="Home">Home</Link></li>
          <li><a href="https://dsebastien.net/news" onClick={props.onToggleMenu} aria-label="News">News</a></li>
          <li><Link onClick={props.onToggleMenu} to="/services" aria-label="Services">Services</Link></li>
          <li><Link onClick={props.onToggleMenu} to="/about" aria-label="About">About</Link></li>
          <li><Link onClick={props.onToggleMenu} to="/team" aria-label="Team">Team</Link></li>
        </ul>
        <ul className="actions vertical">
          <li><a href="#contact" onClick={props.onToggleMenu} className="button fit" aria-label="Contact us">Contact us!</a></li>
        </ul>
      </div>
      <a className="close" onClick={props.onToggleMenu} aria-label="Close">Close</a>
    </nav>
  );
};

export default Menu;
