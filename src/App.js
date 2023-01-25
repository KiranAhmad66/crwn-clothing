import "./App.css";
import { HomePage } from "./pages/homepage.component";
import { Routes, Route } from "react-router-dom";
import { Header } from "./component/header/header.component";
import ShopPage from "./pages/shoppage.component";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
