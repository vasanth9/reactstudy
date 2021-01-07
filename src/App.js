import React from 'react';
import './App.css'
import logo from './logo.svg'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Nav from './Nav';
import StopWatch from './stopwatch/Stopwatch';
import Timer from './timer/Timer';
import Hackernews from './hacker/Hacknews';
import Digitalclock from './digitalclock/Digitalclock';

export default function App() {
    return(<>
    <Router>
    <Nav />
    <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/stopwatch" component={StopWatch} />
    <Route path="/timer" component={Timer} />
    <Route path="/hackernews" component={Hackernews} >
    
</Route>
    <Route path="/digitalclock" component={Digitalclock}/>
    </Switch> 
    
    
    </Router> 
    

    </>);
}
 function Homepage(){
     return(<>
     <div className="row">
     <div className="column">
     <Link to='/hackernews'>
       <img src={logo} alt="Day001-004"/>
    </Link>
    <span><h4>Day001-004</h4></span>
    </div>
    <div className="column">
     <Link to='/digitalclock'>
       <img src={logo} alt="Day005"/>
    </Link>
    <span><h4>Day005</h4></span>
    </div>
    <div className="column">
     <Link to='/stopwatch'>
       <img src={logo} alt="Day006"/>
    </Link>
    <span><h4>Day006</h4></span>
    </div>
    </div>
    <div className="row">
     <div className="column">
     <Link to='/timer'>
       <img src={logo} alt="Day007"/>
    </Link>
    <span><h4>Day007</h4></span>
    </div>
    </div>
     </>)
 }
