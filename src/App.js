import "./App.css";
import { HomePage } from "./pages/homepage.component";
import { Routes, Route } from "react-router-dom";
import { Header } from "./component/header/header.component";
import ShopPage from "./pages/shoppage.component";
import { SignInAndSignUpPage } from "./pages/signin&signuppage";
import { auth } from "./component/firebase/firebase.utils";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      CurrentUser: null,
    };
  }
  unsubscriptionFromAuth = null;
  componentDidMount() {
    this.unsubscriptionFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ CurrentUser: user }, console.log(user));
    });
  }
  componentWillUnmount() {
    this.unsubscriptionFromAuth();
  }
  render() {
    return (
      <div>
        <Header CurrentUser={this.state.CurrentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
