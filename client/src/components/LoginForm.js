import React, { Component } from 'react'
import axios from 'axios'

export class LoginForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       password: '',
       loggedIn: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:5000/users/login',  {
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      if (response.status === 200){
        console.log(response.data)
         this.setState({
          loggedIn: true,
          username: response.data.username
      })
       this.props.history.push('/profile')
       
      }
      
    })
      .catch(error => {
        console.log(error);
      })
  }
  
  render() {
    return (
      <div>
        <h4>Login</h4>
        <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input type="text" placeholder='Username' name='username' id='username' value={this.state.username} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
          </div>
          <button type='submit' onClick={this.handleSubmit}>
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
