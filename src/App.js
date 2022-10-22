import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Gellary from "./Components/Gallary";
import Land from "./Components/Land sell";
import All from "./Components/All";
import Carrier from "./Components/Carrier";
import Property1 from "./Components/prp1";
import Property2 from "./Components/Prp2";
import Property3 from "./Components/prp3";
import Property4 from "./Components/prp4";
import Property5 from "./Components/prp5";
import Property6 from "./Components/prp6";
import Rent from "./Components/Rent";
import Sell from "./Components/sell";
import RentView1 from "./Components/RentView1";
import RentView2 from "./Components/Rentview2";
import RentView3 from "./Components/Rentview3";
import RentView4 from "./Components/RentView4";
import Sellview1 from "./Components/Sellview1";
import Sellview2 from "./Components/Sellview2";
import Sellview3 from "./Components/Sellview3";
import Sellview4 from "./Components/Sellview4";

import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Gallary" element={<Gellary />} />
          <Route path="All" element={<All />} />
          <Route path="Sell" element={<Land />} />
          <Route path="Carrier" element={<Carrier />} />
          <Route path="all/property-1" element={<Property1 />} />
          <Route path="all/property-2" element={<Property2 />} />
          <Route path="all/property-3" element={<Property3 />} />
          <Route path="all/property-4" element={<Property4 />} />
          <Route path="all/property-5" element={<Property5 />} />
          <Route path="all/property-6" element={<Property6 />} />
          <Route path="Rent" element={<Rent />} />
          <Route path="forSell" element={<Sell />} />
          <Route path="Rent/Sell" element={<Land />} />
          <Route path="forSell/Sell" element={<Land />} />
          <Route path="Rent/Rent1" element={<RentView1 />} />
          <Route path="Rent/Rent2" element={<RentView2 />} />
          <Route path="Rent/Rent3" element={<RentView3 />} />
          <Route path="Rent/Rent4" element={<RentView4 />} />
          <Route path="forSell/Sellv1" element={<Sellview1 />} />
          <Route path="forSell/Sellv2" element={<Sellview2 />} />
          <Route path="forSell/Sellv3" element={<Sellview3 />} />
          <Route path="forSell/Sellv4" element={<Sellview4 />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
