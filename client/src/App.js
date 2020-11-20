import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
  return (<div>Testttttt</div>)
}
 }
export default App;
