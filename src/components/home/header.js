import { h, Component } from 'preact';
import ScrollTo from './../scrollTo';

export default class Header extends Component {
  toggleClass = (event) => {
    let isActive = !this.state.isActive;

    this.setState({ isActive });
  }

  render({}, { isActive }) {
    return (
      <div class="header section-bg" id="home">
      <div class="overlay section-overlay">
        <div onClick={this.toggleClass} class={isActive ? 'js-menu-button active' : 'js-menu-button'}>
      <div class="bar-top">
      <div class="bar-half-left"></div>
      <div class="bar-half-right"></div>
      </div>
      <div class="bar-middle"></div>
      <div class="bar-bottom">
      <div class="bar-half-left"></div>
      <div class="bar-half-right"></div>
      </div>
      </div>
      <div class={isActive ? 'menu menu-active' : 'menu'}>
      <ScrollTo href="#work" target="#work" duration="1000" classNames="menu-item subheading">Work</ScrollTo>
      <ScrollTo href="#about" target="#about" duration="1000" classNames="menu-item subheading">About</ScrollTo>
      <ScrollTo href="#contact" target="#contact" duration="1000" classNames="menu-item subheading">Contact</ScrollTo>

      </div>
      <div class="header-content push-down-content">
      <img alt="logo image" class="logo logo-header" src="../assets/images/logo.svg"/>
      <h3 class="subheading push-down-unit">
      Agata Kubiak
    </h3>
      <h1 class="heading header-title">
      Portfolio<ScrollTo classNames="button button-ghost" target="#work" href="#work" duration='1000'>view work</ScrollTo>
      </h1>
      </div>
      </div>
      </div>
  );
}
}
