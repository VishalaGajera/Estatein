import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/MainPages/Home/Home";
import About from "./Components/MainPages/About/About";
import Properties from "./Components/MainPages/Properties/Properties";
import Services from "./Components/MainPages/Services/Services";
import Contact from "./Components/MainPages/Contact/Contact";
import PropertyDetails from "./Components/MainPages/Properties/PropertyDetails";
import ScrollToTop from "./Components/Common/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/property-detail" element={<PropertyDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
