import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import Basic from './component/basic.jsx';
import reportWebVitals from './reportWebVitals';
import About from './route project/page/about'
import Contact from './route project/page/contact'
import Portfolio from './route project/page/portfolio'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";





const routes =(
  <Router>
  <div>
  <ul>
  
    <Link to ='/'>Home</Link>
    <Link to ='/about'>About</Link>
    <Link to = '/contact'>Contact</Link>
    <Link to = '/portfolio'>Portfolio</Link>
  </ul>
   <Route path='/' component={App} />
   <Route exact path='/about' component={About}/>
   <Route path='/contact' component={Contact}/>
   <Route path='/portfolio' component={Portfolio}/>
    </div>
  </Router>
  )

ReactDOM.render(
  
    routes 
    
  ,
  document.getElementById('root')
);


reportWebVitals();
