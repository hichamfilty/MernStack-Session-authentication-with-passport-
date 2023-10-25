import React, { Component } from 'react'

export class Home extends Component {
  render() {
    const imageStyle ={ width: 400}
    return (
      <div>
        <h1>it is good to be home</h1>
        <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" alt=""/>
      </div>
    )
  }
}

export default Home
