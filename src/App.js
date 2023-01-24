import './App.css';
import { HomePage } from './pages/homepage.component';
import {
  Routes,
  Route
} from "react-router-dom";
import ShopPage from './pages/shoppage.component';
function App() {
  return (
    <div>
    <Routes>
    <Route exact path='/' element={<HomePage/>} />
    <Route exact path='/shop' element={<ShopPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
