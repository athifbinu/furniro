import React from "react";
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="mb-10">
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default App;
