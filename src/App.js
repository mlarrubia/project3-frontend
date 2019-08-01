import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonProfileForm from './components/person-profile-form/PersonProfileForm';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="App">
      {/* <PersonProfileForm /> */}
      <Signup />
    </div>
  );
}

export default App;
