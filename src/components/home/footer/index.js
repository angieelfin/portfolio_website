import { h, Component } from 'preact';

export default class Footer extends Component {
  render() {
    return (
        <div class="footer">
        <img class="logo" src="../../assets/images/logo.svg" />
        <p>
        Find me on:
      </p>
        <div class="social-icons">
        <div class="has-inline-content">
        <a href="https://www.facebook.com/pages/Rysunki-i-portrety/170794906386797?ref=hl" target="_blank">
        <div class="icon-circle">
        <i class="social-icon icon-facebook"></i>
        </div>
        </a><a href="https://twitter.com/angie_elfin" target="_blank">
        <div class="icon-circle">
        <i class="social-icon icon-twitter"></i>
        </div>
        </a><a href="https://github.com/angieelfin" target="_blank">
        <div class="icon-circle">
        <i class="social-icon icon-github"></i>
        </div>
        </a>
        </div>
        <div class="has-inline-content">
        <a href="https://www.behance.net/AgataKubiak" target="_blank">
        <div class="icon-circle">
        <i class="social-icon icon-behance"></i>
        </div>
        </a><a href="http://codepen.io/angie_elfin/" target="_blank">
        <div class="icon-circle">
        <i class="social-icon icon-codepen"></i>
        </div>
        </a><a href="https://instagram.com/angie_elfin_art" target="_blank">
        <div class="icon-circle">
        <i class="social-icon icon-instagram"></i>
        </div>
        </a>
        </div>
        </div>
        <p class="footer-paragraph">
        All rights reserved  &#174 2015
      </p>
        </div>

    );
  }
}
