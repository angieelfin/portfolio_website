import { h, Component } from 'preact';

export default class Work extends Component {
  render() {
    return (
        <div class="section-work section-bg" id="work">
        <div class="overlay section-overlay">
        <div class="work-content push-down-content">
        <h2 class="section-title">
        Work
      </h2>
        <a class="button button-ghost button-small" href="gallery/web">Web design & development</a><a class="button button-ghost button-small" href="gallery/graphic">Branding & Graphic Design</a><a class="button button-ghost button-small" href="gallery/art">Drawings, Paintings & Illustrations</a>
        </div>
        </div>
        </div>
    );
  }
}
