import React from "react";
import Header from "./Components/Header";
import ThirdMenu from "./Components/ThirdMenu";
import Footer from "./Components/Footer";
import "./Styles/globals.scss";
import Payment from "./Components/Payment";


function App() {
  return (<>
    <Header/>
    <ThirdMenu/>
    
    <Payment/>
    <Footer/>
    </>
  );
}

export default App;
