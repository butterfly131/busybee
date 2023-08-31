import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cake from "./components/Cake/Cake";
import Bee from "./components/BB/Bee";
import Banner from "./components/Banner/Banner";
import Guestbook from './Pages/Guestbook/Guestbook'
import Poem0 from "./components/Poems/Poem0";
import Footer from "./components/Footer/Footer";
import Poem from "./components/Poems/Poem";
import Gallery from "./components/Gallery/Gallery";
import Display from "./Pages/Display/Display";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/bee" element={<Bee />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/poem0" element={<Poem0/>} />
        <Route path="/poem" element={<Poem/>} />
        <Route path="/display" element={<Display/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </div>
  );
}

export default App;
