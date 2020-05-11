import React,{Component} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import * as Yup from 'yup';

import "./Register.css";

class Register extends Component{
  // history = useHistory();

  state = {
    username:"",
    fullname:"",
    phone:"",
    email:"",
    password:"",
    imageUrl:null
  }
  fileHandler = event => {
    this.setState({
      imageUrl:event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const image = new FormData();
    image.append('image',this.state.imageUrl,this.state.imageUrl.name);
    axios.post('https://api.indrakawasan.com/user/register',image,{
      onUploadProgress:ProgressEvent => {
        console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total) * 100 + '%')
      }
    })
    .then(res => {
      console.log(res);
    })
  }
  render(){
    return(
      <div className="main-register">
      <div className="container-register">
        <div className="container" id="container">
          <div className="form-container sign-in-container">
                <form className="register-form">
                  <h1>Register</h1>
                  <div className="social-container">
                    <a href="/#" className="social">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/#" className="social">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="/#" className="social">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <span>or use your account</span>
                  <input
                    type="text"
                    placeholder="User Name"
                    className="register-input"
                    name="username"
                    id="username"

                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="register-input"
                    name="fullname"
                    id="fullname"

                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="register-input"
                    name="phone"
                    id="phone"

                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="register-input"
                    name="email"
                    id="email"

                  />
                  <input
                    type="text"
                    placeholder="Password"
                    className="register-input"
                    name="password"
                    id="password"

                  />
                  <input
                    type="file"
                    id="custom-file"
                    label="Upload Image"
                    className="register-input"
                    custom
                    name="imageUrl"
                    onChange={this.fileHandler}
                  />
                  <Button variant="danger" type="submit" className="mt-3">
                    Sign Up
                  </Button>
                  <Link>
                    <Button variant="danger" id="signUp" type="reset">
                      Reset
                    </Button>
                  </Link>
                </form>
          </div>
          <div className="overlay-container">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Link to="/login">
                <Button variant="danger">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Register;
