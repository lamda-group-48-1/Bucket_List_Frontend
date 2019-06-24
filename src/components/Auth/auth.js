import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Img from '../../assets/images/img.png'


class Auth extends Component {
    render() {
        return (
          <div className="container">
          <img className="img" src={Img} alt="Logo" width="80px" height="90px" /> 
              <h1 className="heading">MyBucket List</h1>
              <h3>By </h3>
              <p>Lamda</p>
              <hr/>
              <div className="buttons">
              <div className="login"><Link to="/">Login</Link>Login</div>
              <div className="signup">Signup</div>
              </div>
          </div>
        )
    }
}

export default Auth