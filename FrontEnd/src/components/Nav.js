import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #17456f;

  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 1rem;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

function Nav({ state }) {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="/">
          Integração de Sistemas
        </a>
      </h1>
      <div>
        <h3>Account: {state.id} </h3>
        <h3>Credits: {state.credits} </h3>
      </div>
    </StyledNav>
  );
}

export default Nav;
