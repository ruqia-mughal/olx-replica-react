
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./fontawesome/index.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from "./components/home.jsx";
import Main from "./components/main.jsx";
import Header from "./components/header.jsx";
import Slider from './components/slider.jsx';

import LogSign from './components/logSign.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
      {/* <Link to="../components/logSign.jsx ">click me</Link>
       <LogSign/> */}
       <Slider/>
       <Main />
    
       
      
      <Route path="/logSign" component={LogSign}/>
    
      <Route path="/" component={Home}/>

      </BrowserRouter>
    
  


    )
  }
}


export default App;
