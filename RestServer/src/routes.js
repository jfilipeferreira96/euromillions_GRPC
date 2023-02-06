const { Router } = require("express");
const routes = Router();
const CrediBank = require("./Controllers/CrediBank");
const EuroMil = require("./Controllers/EuroMil");

//Rota para check
routes.get("/check/:credit_account_id?/ammount/:value?", CrediBank.GetDigitalCheck);

//Rota para registar o euromilhoes
routes.post("/euromil", EuroMil.grpcRequest);

module.exports = routes;
