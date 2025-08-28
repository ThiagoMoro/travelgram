import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./styles/index.css";

export default function App() {
  return (
    <div className="bg-surface-color">
      <Navbar />
      <Header />
      <main className="container">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
