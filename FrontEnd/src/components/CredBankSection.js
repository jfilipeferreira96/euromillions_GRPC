import React from "react";
import styled from "styled-components";

function CreBankSection() {
  return (
    <section className="sect3" id="contact">
      <div className="container-fluid">
        <div className="text-center pt-5 pb-5">
          <p></p>
          <h2>Carrega créditos</h2>
          <img
            src="https://clipartix.com/wp-content/uploads/2018/03/cartoon-money-2018-20.png"
            alt="cartoon_img"
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


export default CreBankSection;
