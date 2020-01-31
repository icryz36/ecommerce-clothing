import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/hompage/homepage.component'
import Shoppage from './pages/shoppage/shoppage.component'
import Header from './components/header/header.component'
import './App.scss';



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={Shoppage}/>
      </Switch>
    </div>
  );
}

export default App;
