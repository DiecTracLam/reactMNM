import './assets/fonts/fontawesome-free-6.0.0-web/css/all.min.css'
import Header from "./Components/Header";
import "../src/assets/css/base.css";
import "../src/assets/css/main.css";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import DetailProduct from "./Features/ProductList/DetailProduct"
import Information from "./Features/User/Information";
import { Routes, Route } from "react-router-dom";
import History from "./Components/Main/History";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer} from 'react-notifications';
import Cart from "./Features/Cart";



function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<DetailProduct/>} />
          <Route path="history" element={<History />} />
          <Route path="cart" element={<Cart />} />
          <Route path='account' element={<Information/>}/>
        </Routes>
      </div>
      <Footer />
      <NotificationContainer/>
    </div>
  );
}

export default App;
