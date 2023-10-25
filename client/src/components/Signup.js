import React, { Component } from 'react'
import axios from 'axios'

export class Signup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit (e) {
    e.preventDefault();
    axios.post('http://localhost:5000/users/register', {
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      console.log(response);
      if (response.data) {
        console.log('successful signup');
        this.props.history.push('/login')
      } else {
        console.log('uSignup error');
      }
    })
      .catch(error => {
        console.log('signup error');
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <h4>Sign up</h4>
        <form>
          <div>
              <label htmlFor="username">
                Username
              </label>
              <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
          </div>
          <button type="submit" onClick={this.handleSubmit} >Sign up</button>
        </form>
      </div>
    )
  }
}

export default Signup
