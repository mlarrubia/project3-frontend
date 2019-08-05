import React from 'react';
import './App.css';

import AuthService from './services/AuthService.js';
import axios from 'axios';


import CelebrityCard from './components/celebritycard/CelebrityCard';
import PersonProfileForm from './components/personprofileform/PersonProfileForm';
import Signup from './components/signup/Signup.js';
import Login from './components/login/Login.js';
import UserProfile from './components/userprofile/UserProfile';
import CelebrityProfile from './components/celebrityprofile/CelebrityProfile';
import RegisterCelebrityCard from './components/registercelebritycard/RegisterCelebrityCard';
import Navbar from './components/navbar/Navbar.js'
import Category from './components/category/Category.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentlyLoggedIn: null,
      ready: false,
      signupShowing: false,
      loginShowing: false,

    }

    this.service = new AuthService();


  }




  getCurrentlyLoggedInUser = () =>{
    this.service.currentUser()
    .then((theUser)=>{
      this.setState({currentlyLoggedIn: theUser})
    })
    .catch(()=>{
      this.setState({currentlyLoggedIn: null})
    })
  }



  toggleForm = (whichForm) =>{

    let theForm;
  
    if(whichForm === "signup"){
      theForm = 'signupShowing'
    } else {
      theForm = 'loginShowing'
    }
  
    this.setState({[theForm]: !this.state[theForm]})  
  
  }

  componentDidMount(){
    this.getCurrentlyLoggedInUser();
  }


  
  render() {
    return (
      <div className="App">

      <Navbar 
        theUser = {this.state.currentlyLoggedIn} 
        pleaseLogOut = {()=> this.service.logout()}
        toggleForm = {this.toggleForm}
        getUser = {this.getCurrentlyLoggedInUser}      
        />

        {this.state.signupShowing && 
          <Signup getUser = {this.getCurrentlyLoggedInUser}
          toggleForm = {this.toggleForm}
          />
        }

        {this.state.loginShowing && 
          <Login getUser = {this.getCurrentlyLoggedInUser}
          toggleForm = {this.toggleForm}
          />
        }
        {/* <CelebrityProfile /> */}
        <UserProfile />
        {/* <UserProfile /> */}






        
        {/* <PersonProfileForm /> */}
        {/* <RegisterCelebrityCard /> */}
        
        {/* <CelebrityCard /> */}
      </div>
    );
  }

}
export default App;
