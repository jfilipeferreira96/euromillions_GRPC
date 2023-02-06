import React from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

function CreBankSection({ state, setState }) {
  const [form, setForm] = React.useState({
    account_id: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setForm({ ...form, [evt.target.name]: value });
  }

  const asyncGetCheque = async (account_id, value) => {
    try {
      const response = await fetch(`http://localhost:5000/check/${account_id}/ammount/${value}`);
      const data = await response.json();
      console.log(data);
      if (data.status) {
        setState({ id: account_id, credits: value });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.account_id) {
      alert("Please fill the form!");
      return;
    }
    console.log(form.account_id, form.value);
    asyncGetCheque(form.account_id, 10);
  };

  return (
    <section className="sect3" id="contact">
      <div className="container-fluid">
        <div className="text-center pt-5 pb-5">
          <p></p>
          <h2>Add Credits</h2>
          <img src="https://clipartix.com/wp-content/uploads/2018/03/cartoon-money-2018-20.png" alt="cartoon_img" />
          <div className="json"></div>

          <form id="formCheque" onSubmit={handleSubmit}>
            <label>Account ID</label>
            <input value={form.account_id} onChange={handleChange} type="text" id="account_id" name="account_id" placeholder="Your Account ID.." />

            {/*  <label>Value</label>
            <input value={form.value} onChange={handleChange} type="number" id="value" name="value" placeholder="Insert an amount" /> */}

            <div id="json"></div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreBankSection;
