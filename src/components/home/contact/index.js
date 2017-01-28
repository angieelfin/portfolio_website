import { h, Component } from 'preact';

export default class Contact extends Component {
  render() {
    return (
        <div class="section-contact section-bg" id="contact">
        <div class="overlay section-overlay">
        <div class="contact-content push-down-10">
        <h2 class="section-heading">
        Contact
        </h2>
        <div class="contact-info">
        <p class="font-bigger">
        Agata Kubiak
        </p>
        <p>
        Gdańsk, Poland
        </p>
        <p>
        agatakubiak.dev@gmail.com
        </p>
        </div>
        </div>
        </div>
        </div>
    );
  }
}
