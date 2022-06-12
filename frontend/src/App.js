import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register_Comp from './Components/RegisterFile';
import Supply_Comp from './Components/SupplyFile';
import Track_Comp from './Components/TrackFile';
import OrderMed_Comp from './Components/OrderMed';
import Landing_Comp from './Components/LandingFile';
import Step_Comp from './Components/Step';
import Contact_Comp from './Components/ContactFile';


function App() {
  return (
    <div>
      {/* <Navbar_Comp /> */}
      <Routes>
        <Route path="/" element={<Landing_Comp />} />
        {/* <Route path="/home" element={<Home_Comp />} /> */}
        <Route path="/register" element={<Register_Comp />} />
        <Route path="/ordermed" element={<OrderMed_Comp />} />
        <Route path="/supply" element={<Supply_Comp />} />
        <Route path="/track" element={<Track_Comp />} />
        <Route path="/steps" element={<Step_Comp />} />
        <Route path="/contact" element={<Contact_Comp />} />
      </Routes>
    </div>
  );
}

export default App;
