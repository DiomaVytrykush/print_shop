import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Iframe from 'react-iframe'
import './Footer.css';
import FooterBox from './FooterBox/FooterBox';
import store from './../Redux/Redux-Store';
import Facebook from './img/Facebook.png';
import Instagram from './img/Instagram.png'

const state = store.getState();
// Function map helps us to create new massive with few new boxes one by one 

const FooterBoxesElements = state.mainPage.FooterBoxes.map(box => <FooterBox key={box.id} img={box.img} text={box.text} description={box.description} />)


class Footer extends React.Component {
  state = {
    modal: false,
    modal14: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  secondToggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    return (
      <div className="Footer">
        <div className="Footer__wrapper">
          <h1>Заказувати просто!</h1>
          <div className="Footer__boxes">
            {FooterBoxesElements}
          </div>
        </div>
        <div className="ContactUs">
          <div className="ContactUs__wrap">
            <MDBContainer>
              <MDBBtn color="grey" onClick={this.toggle(14)}>Оплата та доставка</MDBBtn>
              <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                <MDBModalBody className="grey-text">
                  <h3>Доставка:</h3>
                  <ul>
                    <li>Нова пошта (до відділення/до дверей)</li>
                    <li>Самовивіз / Особиста зустріч</li>
                    <li>Нова Пошта</li>
                  </ul>
                  <h3>Способи оплати:</h3>
                  <ul>
                    <li>Готівковий</li>
                    <li>Банківський переказ</li>
                    <li>При доставці товару</li>
                    <li>Visa/Mastercard</li>
                  </ul>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="black" onClick={this.toggle(14)}>Закрити</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </MDBContainer>
            <MDBContainer>
              <MDBBtn color="grey" onClick={this.secondToggle}>Місце знаходження</MDBBtn>
              <MDBModal isOpen={this.state.modal} toggle={this.secondToggle}>
                <MDBModalBody>
                  <Iframe mt-20 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.5346386688045!2d24.399468829245123!3d49.51965986933781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDMxJzEwLjgiTiAyNMKwMjQnMDAuMSJF!5e0!3m2!1sru!2sua!4v1591639847902!5m2!1sru!2sua" width="340" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" />
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="black" onClick={this.secondToggle}>Закрити</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </MDBContainer>
          </div>
          <div className="ContactUs__list">
            <div className="ContactUs__location">
              <p><span>м.Івано-Франківськ</span></p>
            </div>
            <div className="ContactUs__number">
              <p>+38 (096) <span>471-65-59</span></p>
            </div>
            <div className="ContactUs__mail">
              <p>diomamyp@<span>gmail.com</span></p>
            </div>
          </div>
          <div className="ContactUs__media">
            <a href="https://www.facebook.com/evangelina.ev.54" rel="noopener noreferrer" target="_blank"  ><img alt="img" src={Facebook} /></a>
            <a href="https://www.instagram.com/prin7_shop/" rel="noopener noreferrer" target="_blank"  ><img alt="img" src={Instagram} /></a>
          </div>
        </div>
        <div className="Policy">
          <p>Privacy Policies are Legally Required</p>
        </div>
      </div >
    )
  }
}

export default Footer;

