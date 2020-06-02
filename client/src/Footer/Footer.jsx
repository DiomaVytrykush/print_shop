import React from 'react';
import './Footer.css';
import FooterBox from './FooterBox/FooterBox';
import store from './../Redux/Redux-Store';
import Facebook from './img/Facebook.png';
import Instagram from './img/Instagram.png'

function Footer() {

  let state = store.getState();
  // Function map helps us to create new massive with few new boxes one by one 
  let FooterBoxesElements = state.mainPage.FooterBoxes.map(box => <FooterBox key={box.id} img={box.img} text={box.text} description={box.description} />)

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
          <p>Оплата і доставка</p>
          <p>Місце знаходження</p>
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

export default Footer;

