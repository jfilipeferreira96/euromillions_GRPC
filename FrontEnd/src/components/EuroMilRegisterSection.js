import React from "react";
import styled from "styled-components";

function EuroMilRegisterSection() {
  return (
    <section className="sect3" id="contact">
      <div className="container-fluid">
        <div className="text-center pt-5 pb-5">
          <p></p>
          <h2>Regista o Euromilhões</h2>
          <img
            src="https://www.carnivallotto.com/assets/euromillions/_resampled/ScaleWidthWzI4M10/splash.png"
            alt="lottery_png"
          />
          <div className="json"></div>

          <form id="formCheque" method="get">
            <label>Account ID</label>
            <input
              type="text"
              id="credit_account_id"
              name="credit_account_id"
              placeholder="Your Account ID.."
            />

            <label>Value</label>
            <input type="number" id="value" name="value" placeholder="Insert an amount" />

            <div id="json"></div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}


export default EuroMilRegisterSection;
