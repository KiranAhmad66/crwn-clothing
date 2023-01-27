import React, { Component } from "react";
import { CustomButton } from "../custom button/custom-button";
import { auth, createUserProfile } from "../firebase/firebase.utils";
import { FormInput } from "../forminputs/forminput.component";
import "./signup.scss";
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmpassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmpassword } = this.state;
    if (password !== confirmpassword) {
      alert("password donot match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmpassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I Do Not Have Account</h2>
        <span>sign up with your email and password</span>
        <form
          className="sign-up-form"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UPS</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
