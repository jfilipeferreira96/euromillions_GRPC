import React from "react";
//Page Components
import CredBankSection from "../components/CredBankSection";
import EuroMilRegisterSection from "../components/EuroMilRegisterSection";
import Nav from "../components/Nav";

function Home(){
  
 /*  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  ) */

  return (
    <>
      <Nav />
      <CredBankSection />
      <EuroMilRegisterSection /> 
    </>
  );
}

export default Home;
