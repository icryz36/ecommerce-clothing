import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/homepage.component'
import './App.scss';




const TopicDetail = () =>{
  return(
    <div>
      <h1>TOPIC DETAIL</h1>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/topic" component={TopicDetail}/>
      </Switch>
    </div>
  );
}

export default App;
