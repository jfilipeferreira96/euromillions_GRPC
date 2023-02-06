import React from "react";
//Page Components
import CredBankSection from "../components/CredBankSection";
import EuroMilRegisterSection from "../components/EuroMilRegisterSection";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <CredBankSection />
      <EuroMilRegisterSection /> 
    </>
  );
}

export default Home;
