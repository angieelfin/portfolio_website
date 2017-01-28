import { h, Component } from 'preact';
import smoothScroll from 'smoothscroll'

export default class ScrollTo extends Component {
  scrollToTarget = (e) => {
    const destination = document.querySelector(this.props.target);

    e.preventDefault()

    smoothScroll(destination, this.props.duration);
  }
  render(props, state) {
    return (
        <a href={ props.href } target={ props.target } class={ props.classNames } onClick={ this.scrollToTarget }>
           { props.children }
        </a>
    );
  }
}
