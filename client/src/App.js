import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBarContainer from './Navbar/NavbarContainer';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Aboutus from './Aboutus/Aboutus';
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
            <Route path='/aboutus' render={() => <Aboutus />} />
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

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// class App extends Component {
//   state = {
//     response: '',
//     post: '',
//     responseToPost: '',
//   };
//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }
//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);
//     return body;
//   };
//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();
//     this.setState({ responseToPost: body });
//   };
// render() {
//   return (
//     <div className="App">
//       <header className="App-header">

//       </header>
//       <p>{this.state.response}</p>
//       <form onSubmit={this.handleSubmit}>
//         <p>
//           <strong>Post to Server:</strong>
//         </p>
//         <input
//           type="text"
//           value={this.state.post}
//           onChange={e => this.setState({ post: e.target.value })}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <p>{this.state.responseToPost}</p>
//     </div>
//   );
// }
// }
// export default App;
