import { h, Component } from 'preact';

import '../../style/css/all.scss';

import Header from './header';
import About from './about';
import Work from './work';
import Contact from './contact';
import Footer from './footer';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}
