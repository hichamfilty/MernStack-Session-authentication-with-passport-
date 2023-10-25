import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Signup from './components/Signup'
import Navbar from './components/Navbar'

import './App.css'



class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loggedIn: false,
       username: ''
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
  componentDidMount(){
    this.getUser()
  }
  updateUser (userObject){
    this.setState(userObject)
  }
  getUser(){
    axios.get('http://localhost:5000/users/profile').then(response => {
      console.log(response)
     
    })
  }
  
  render() {
    return (
      <div className='App'>

        <Navbar  updateUser={this.updateUser} loggedIn={this.state.loggedIn}  />
        <br/>
        hello
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route exact path='/profile' component={Home} />
        <Route path='/login' component={LoginForm } />
        <Route path='/signup' component={Signup} />
      </div>
    );
  }
}

export default App;

