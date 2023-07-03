import React from "react";
import Header from "../Header/Header";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";
import "./App.scss";
import { partOne } from "./data";
import { partTwo } from "./data";
function App() {
  return (
    <div className="App">
      <Header />
      <Articles array={partOne} />
      <Articles array={partTwo} />
      <Footer />
    </div>
  );
}

export default App;
