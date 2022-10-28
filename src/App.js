import Header from "./Components/Header";
import "../src/assets/css/base.css";
import "../src/assets/css/main.css";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import DetailProduct from "./Components/Main/ProductList/DetailProduct";
import Information from "./Features/User/Information";
import { Routes, Route } from "react-router-dom";
import History from "./Components/Main/History";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer} from 'react-notifications';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="contact" element={<History />} />
          <Route path='account' element={<Information/>}/>
        </Routes>
      </div>
      <Footer />
      <NotificationContainer/>
    </div>
  );
}

export default App;
