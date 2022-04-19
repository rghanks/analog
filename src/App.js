import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Psecurity from './pages/Psecurity';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Terms from './pages/Terms';
import Faq from './pages/Faq';
import Affiliate from './pages/Affiliate';
import Transactions from './pages/Transactions';
import Projects from './pages/Projects';
function App() {
 return (
   <div>
 

 <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/Psecurity" component={Psecurity}/>
       <Route exact path="/Profile" component={Profile}/>
       <Route exact path="/Login" component={Login}/>
       <Route exact path="/Signup" component={Signup}/>
       <Route exact path="/Terms" component={Terms}/>
       <Route exact path="/Faq" component={Faq}/>
       <Route exact path="/Affiliate" component={Affiliate}/>
       <Route exact path="/Transactions" component={Transactions}/>
       <Route exact path="/Projects" component={Projects}/>

     </Switch>
     </BrowserRouter>
    
  
   </div>
 
 )
}

export default App;
