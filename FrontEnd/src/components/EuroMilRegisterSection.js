import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function EuroMilRegisterSection({ state, setState }) {
  const [numbers, setNumbers] = useState({
    nums: Array.from({ length: 5 }),
    numsStar: Array.from({ length: 2 }),
  });

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomValidNumArr() {
    let arrNums = [];
    let arrNumsStar = [];

    // Ball Numbers
    while (arrNums.length < 5) {
      let randNum = getRandomNum(1, 50);
      if (arrNums.indexOf(randNum) === -1) {
        arrNums.push(randNum);
      }
    }

    // Stars Numbers
    while (arrNumsStar.length < 2) {
      let randNumStar = getRandomNum(1, 12);
      if (arrNumsStar.indexOf(randNumStar) === -1) {
        arrNumsStar.push(randNumStar);
      }
    }

    // Sort the numbers from lowest to highest
    setNumbers({
      nums: arrNums.sort(function (a, b) {
        return a - b;
      }),
      numsStar: arrNumsStar.sort(function (a, b) {
        return a - b;
      }),
    });
  }

  function getRandomInvalidNumArr() {
    let arrNums = [];
    let arrNumsStar = [];

    // Ball Numbers
    while (arrNums.length < 5) {
      let randNum = getRandomNum(1, 5);
      arrNums.push(randNum);
    }

    // Stars Numbers
    while (arrNumsStar.length < 1) {
      let randNumStar = getRandomNum(1, 12);
      arrNumsStar.push(randNumStar);
      arrNumsStar.push(randNumStar);
    }

    // Sort the numbers from lowest to highest
    setNumbers({
      nums: arrNums.sort(function (a, b) {
        return a - b;
      }),
      numsStar: arrNumsStar.sort(function (a, b) {
        return a - b;
      }),
    });
  }

  const submitEuroMil = async (checkid, balls, stars) => {
    if (!checkid || !balls || !stars) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/euromil`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          checkid: checkid,
          key: balls.join("-") + "-" + stars.join("-"),
        }),
      });
      const data = await response.json();

      if (data.message !== "Euromil was registered with success") {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message,
        });
      } else {
        MySwal.fire("Success!", data.message, "success").then(() => {
          setState({ id: "", credits: "", checkID: "" });
        });
      }
    } catch (error) {
      console.log(error);
    }

    //clear state setState({id: "", credits: "", checkID: ""})
  };

  return (
    <section className="sect3" id="contact">
      <div className="container-fluid">
        <div className="text-center pt-5 pb-5">
          <p></p>
          <h2>Register Euromillions</h2>
          <img src="https://www.carnivallotto.com/assets/euromillions/_resampled/ScaleWidthWzI4M10/splash.png" alt="lottery_png" />

          <div className="ballcontainer">
            {numbers.nums.map((number, index) => (
              <div className="ball" key={index}>
                {number}
              </div>
            ))}
          </div>
          <div className="ballcontainer">
            {numbers.numsStar.map((star, index) => (
              <div className="five-pointed-star" key={index}>
                <div>{star}</div>
              </div>
            ))}
          </div>

          <div>
            <button className="buttonred" onClick={getRandomInvalidNumArr}>
              Generate an INVALID key
            </button>
            <button className="buttongreen" onClick={getRandomValidNumArr}>
              Generate a VALID key
            </button>
          </div>

          <button onClick={() => submitEuroMil(state.checkID, numbers.nums, numbers.numsStar)}>Submit EuroMillions</button>
        </div>
      </div>
    </section>
  );
}

export default EuroMilRegisterSection;
