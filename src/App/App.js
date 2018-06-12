import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import TopNav from '../TopNav/TopNav';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopNav />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
        </div>
      </div>
    );
  }
}

export default App;






// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//
// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/topics">Topics</Link>
//         </li>
//       </ul>
//
//       <hr />
//
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
// );
