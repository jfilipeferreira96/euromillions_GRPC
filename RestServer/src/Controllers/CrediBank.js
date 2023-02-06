const path = require("path");
const moment = require("moment");

class Controller {
  async GetDigitalCheck(req, res) {
    const { credit_account_id, value } = req.params;
    let data = { message: `Something went wrong.` };
    let responseCode = 400;

    const getRandomNumber = (digit) => {
      return Math.random().toFixed(digit).split(".")[1];
    };

    if (!credit_account_id) {
      data = { status: false, message: `It's required a value.` };
    }
    if (!value) {
      data = { status: false, message: `It's required a deposit value.` };
    }

    if (credit_account_id && value) {
      data = { status: true, date: moment().format("YYYY-MM-DD HH:mm:ss"), checkID: getRandomNumber(16) };
      responseCode = 200;
    }

    res.status(responseCode).json(data);
  }

  async grpcRequest(req, res) {
    let data = { message: `Something went wrong.` };
    let responseCode = 400;

    try {
      const response = await fetch(`http://localhost:5000/euromil`);
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }

    res.status(responseCode).json(data);
  }
}

module.exports = new Controller();
