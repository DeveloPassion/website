import * as React from 'react';

import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Menu from './menu';

import '../assets/scss/main.scss';

export interface LayoutProps extends React.ClassAttributes<Layout> {}

export interface LayoutState {
  loading: string;
  isMenuVisible: boolean;
}
export default class Layout extends React.Component<LayoutProps, LayoutState> {
  private timeoutId: number | undefined;

  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading'
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  public componentDidMount() {
    this.timeoutId = window.setTimeout(() => {
      this.setState({loading: ''});
    }, 100);
  }

  public componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  public handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    });
  }

  public render() {
    const {children} = this.props;

    return (
      <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu}/>
          {children}
          <Contact/>
          <Footer />
          
        </div>
        <Menu onToggleMenu={this.handleToggleMenu}/>
      </div>
    )
  }
}
