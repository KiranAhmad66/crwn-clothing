import React, { Component } from "react";
import { CustomButton } from "../custom button/custom-button";
import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";
import { FormInput } from "../forminputs/forminput.component";
import "./signin.style.scss";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log(this.state);

      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I Already Have Account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="button">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
              sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
