import { Component, React } from 'react';
import Header from '../../../Header';
import IntroduceGraduate from './IntroduceGraduate';
import ShowGraduate from './ShowGraduate';
import Buttons from '../Buttons';
import Band from './Band';
import Footer from '../../../Footer';
class Graduates extends Component {

  render() {
    return(
      <div>
        <Header></Header>
        <IntroduceGraduate></IntroduceGraduate>
        <Buttons></Buttons>
        <Band></Band>
        <ShowGraduate></ShowGraduate>
        <Footer></Footer>
      </div>
    )
  }
}
export default Graduates;
