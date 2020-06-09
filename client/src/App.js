import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBarContainer from './Navbar/NavbarContainer';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ItemContainer from './Item/ItemContainer';
import LoginContainer from './Login/LoginContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import ReviewsContainer from './Reviews/ReviewsContainer';
import BasketContainer from './Basket/BasketContainer'


class App extends React.Component {

  // RETURN ALERT WHEN THERE IS A PROBLEM WITH PROMISES, BAD URL, etc (404, 403, etc)
  // catchAllUnhandledErrors = (reason, promise) => {
  //   alert("Some error with sending")
  // }
  componentDidMount = () => {
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  componentWillUnmount = () => {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }

  render() {

    return (
      // Tag Route used to control the name of the url
      // Tag rowserRouter helps to use the Route

      <div className="App">

        <BrowserRouter>
          <NavBarContainer />
          <Switch>

            <Route path='/' exact><Redirect to='/shop' /></Route>
            <Route exact path='/shop' render={() => <Main />} />
            <Route path='/Item/:itemId?' render={() => <ItemContainer />} />
            <Route path='/basket' render={() => <BasketContainer />} />
            <Route path='/login' render={() => <LoginContainer />} />
            <Route path='/Reviews' render={() => <ReviewsContainer />} />
            <Route path='*' render={() => <div>404 NOT FOUND</div>} />

          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


