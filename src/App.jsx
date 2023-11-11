import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import CustomNavbar from './Components/CustomNavbar/CustomNavbar';
import ShopNow from './Pages/ShopNow/ShopNow';
import About from './Pages/About/About';
import PhoneSupport from './sections/Home/PhoneSupport/PhoneSupport';


function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopNow' element={<ShopNow />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <PhoneSupport />
    </>
  );
}

export default App;
