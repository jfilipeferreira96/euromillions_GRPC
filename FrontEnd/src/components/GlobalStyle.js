import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      margin:0;
      padding:0;
      box-sizing:border-box;
  }
  html{
      @media (max-width: 1500px) {
          font-size: 85%;
      }
  }
  body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
  }
       
  button{
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
  }
  h2{
    font-weight: 700;
    font-size: 4rem;
  }
  h3{
      color:white;
  }
  p{
      padding: 3rem 0rem;
      color: #cccccc;
      font-size: 1.4rem;
      line-height: 150%;
  }
  h4{
      font-size: 2.5rem;
  }
  span{
      font-weight: bold;
      color: #23d997;
  }
  a{
      font-size: 1.1.rem;
  }
    
  .sect3 h2 {
    color: #17456f;
    font-size: 3rem;
    font-weight: 700;
  }

  .sect3 h1 {
    font-size: 2.5rem;
    color: #09253e;
  }

  .sect3 {
    background-color: rgb(206, 217, 226);
    width: 100%;
    height: 100vh;
  }

  .text-center {
    text-align: center !important;
  }
  .pb-5 {
    padding-bottom: 3rem !important;
  }

  .pt-5 {
    padding-top: 3rem !important;
  }

  img {
    max-width: 100%;
    height: auto;
    max-height: 250px;
    margin: 3rem 0rem;
  }

  input {
    width: 500px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    display: block;
  }

  @media only screen and (max-width: 600px) {
    input {
      width: 100%;
    }
  }

  form {
    display: inline-block;
  }

  button {
    font-size: 17px;
    font-family: "Source Sans Pro", sans-serif;
    border: none;
    border-radius: 5px;
    display: inline-block;
    padding: 6px 18px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #09253e;
    color: #ffffff;
  }

  label {
    font-size:1.8rem;
    color: #17456f;
    font-weight: 700;
  }

  #json {
    margin-bottom: 12px;
    margin-top: 12px;
    font-weight: 600;
  }

  .ballcontainer {
    grid-column: content-start / content-end;
    display: flex;
    justify-content: center;
  }

  .ball {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: .05rem;
    color: #212121;
    background-color: #fff;
    border: 1px solid #caccce;
    border-radius: 50%;
    box-shadow: 1px 1px 5px -1px rgb(202 204 206 / 60%);
  }

  .five-pointed-star {
    --star-color:orange;
    margin: 2.5rem 0.5rem 2.5rem 0.5rem;
    font-size:2.5em;
    position: relative;
    display: block;
    width: 0px;
    height: 0px;
    border-right: 1em solid transparent;
    border-bottom: 0.7em solid var(--star-color);
    border-left: 1em solid transparent;
    transform: rotate(35deg);

      div{
        rotate: 325deg;
        position: absolute;
        z-index:2;
        margin-left: -16px;
        width: 3.5rem;
        height: 3.5rem;
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: .05rem;
        color: #212121;
      }
  }
  .five-pointed-star:before {
    border-bottom: 0.8em solid var(--star-color);
    border-left: 0.3em solid transparent;
    border-right: 0.3em solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -0.45em;
    left: -0.65em;
    display: block;
    content:"";
    transform: rotate(-35deg);
  }
  .five-pointed-star:after {
    position: absolute;
    display: block;
    top: 0.03em;
    left: -1.05em;
    width: 0;
    height: 0;
    border-right: 1em solid transparent;
    border-bottom: 0.7em solid var(--star-color);
    border-left: 1em solid transparent;
    transform: rotate(-70deg);
    content:"";
  }
`;
export default GlobalStyle;
