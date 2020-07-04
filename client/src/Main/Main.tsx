import React from 'react';
import './Main.css';
import Header from './Header/Header';
import ChoicesContainer from '../Choices/ChoicesContainer';
import Whyus from './Whyus/Whyus';
import store from '../Redux/Redux-Store';

function Main() {

  let state = store.getState();

  return (
    <div className="Main">
      <Header />
      <div className="Container">
        <ChoicesContainer />
      </div>
      <Whyus Whyuses={state.mainPage.Whyuses} />
    </div>
  )
}

export default Main;