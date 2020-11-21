import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Arena from './components/arena';
import Signup from './components/signup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Card, Alert } from 'react-bootstrap';

// first we will make a new context
// const MyContext = React.createContext();
// // Then create a provider Component
// class MyProvider extends Component {
//   state = {
//     name: 'Hello',
//     players: [],
//   };
//   render() {
//     return (
//       <MyContext.Provider
//         value={{
//           state: this.state,
//           //add method to the context api to be used in the children components
//           growAYearOlder: () => console.log('this is a method'),
//         }}>
//         {/* passing the sate to the children */}
//         {this.props.children}
//       </MyContext.Provider>
//     );
//   }
// }

class App extends Component {
  //   render() {
  //     return (
  //       <MyProvider>
  //         <>
  //           <Router>
  //             {/* switch component serves as a child component to all the links without having to reload  */}
  //             <Switch>
  //               <Link to="/home">Home</Link>
  //             </Switch>
  //             <Switch>
  //               <Link to="/arena">Arena</Link>
  //             </Switch>
  //             <h1>React component mounting!</h1>
  //           </Router>
  //         </>
  //       </MyProvider>
  //     );
  //   }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/home" component={Home} />
            <Route path="/arena" component={Arena} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
/* <React.Fragment>
    <div>
    <Login/>
    <Home />
    </div>
    <div>
    <Arena/>
    </div>
    </React.Fragment> */
