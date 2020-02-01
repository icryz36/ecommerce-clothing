import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/hompage/homepage.component'
import Shoppage from './pages/shoppage/shoppage.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/authpage/authpage.component'

import { auth } from './firebase/firebase.utils'
 
import './App.scss';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser:null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user =>{
      this.setState({
        currentUser:user
      })
    })
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={Shoppage}/>
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
