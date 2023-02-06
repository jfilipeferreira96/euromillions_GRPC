const { Router } = require("express");
const routes = Router();
const CrediBank = require("./Controllers/CrediBank");

//Rota para check
routes.get("/check/:credit_account_id?/ammount/:value?", CrediBank.GetDigitalCheck);

routes.get("/", (req, res) => {
  res.sendFile("Views/home_page.html", { root: __dirname });
});

module.exports = routes;
