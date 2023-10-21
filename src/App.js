import React from "react"
import './App.css';

import Header from "./components/Header";
import Typingbox from "./components/Typingbox";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Typingbox />
      <Statistics />
      <Footer />

      
    </div>
  );
}

export default App;
