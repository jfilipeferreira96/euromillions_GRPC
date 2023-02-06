import React, { useState } from "react";
//Page Components
import CredBankSection from "../components/CredBankSection";
import EuroMilRegisterSection from "../components/EuroMilRegisterSection";
import Nav from "../components/Nav";

function Home() {
  const [state, setState] = useState({
    id: "",
    credits: "",
  });

  return (
    <>
      <Nav state={state} />
      {!state.id && <CredBankSection state={state} setState={setState} />}
      {state.id && <EuroMilRegisterSection state={state} setState={setState} />}
    </>
  );
}

export default Home;
