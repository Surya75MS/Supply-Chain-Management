import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home_Comp from './Components/HomeFile';
import Register_Comp from './Components/RegisterFile';
import Supply_Comp from './Components/SupplyFile';
import Track_Comp from './Components/TrackFile';
import OrderMed_Comp from './Components/OrderMed';
import { Navbar_Comp } from './Components/NavFile';

function App() {
  return (
    <div>
      <Navbar_Comp />
      <Routes>
        <Route path="/" element={<Home_Comp />} />
        <Route path="/register" element={<Register_Comp />} />
        <Route path="/ordermed" element={<OrderMed_Comp />} />
        <Route path="/supply" element={<Supply_Comp />} />
        <Route path="/track" element={<Track_Comp />} />
      </Routes>
    </div>
  );
}

export default App;
