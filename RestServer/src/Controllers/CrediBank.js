const path = require("path");
const moment = require("moment");

class Controller{
  
  async GetDigitalCheck(req, res) {
    const { credit_account_id, value } = req.params;
    let data = { message: `Something went wrong.` };
    let responseCode = 400;

    const getRandomNumber = (digit) => {
      return Math.random().toFixed(digit).split(".")[1];
    };

    if (!credit_account_id) {
      data = { message: `It's required a value.` };
    }
    if (!value) {
      data = { message: `It's required a deposit value.` };
    }

    if (credit_account_id && value) {
      data = { date: moment().format("YYYY-MM-DD HH:mm:ss"), checkID: getRandomNumber(16) };
      responseCode = 200;
    }

    res.status(responseCode).json(data);
  }
  
}

module.exports = new Controller();
