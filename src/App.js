import "./App.css";
import { HomePage } from "./pages/homepage.component";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header/header.component";
import ShopPage from "./pages/shoppage.component";
import { SignInAndSignUpPage } from "./pages/signin&signuppage";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/user.action";
class App extends Component {
  unsubscriptionFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscriptionFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscriptionFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
