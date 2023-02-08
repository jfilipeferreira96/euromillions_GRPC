const caller = require("grpc-caller");
const PROTO_PATH = "./src/proto/registerEuroMil.proto";
const client = caller("localhost:50051", PROTO_PATH, "Euromil");

class Controller {
  async grpcRequest(req, res) {
    const { key, checkid } = req.body;
    let data = { message: `Something went wrong.` };
    let responseCode = 400;

    try {
      console.log(`Sent to gRPC server the following object:`, JSON.stringify({ key, checkid }));
      const response = await client.RegisterEuroMil({ key, checkid });
      if (response) {
        console.log(`Server returned the following object:`, JSON.stringify(response));
        data = response;
        responseCode = 200;
      }
    } catch (error) {
      console.log(error);
    }

    res.status(responseCode).json(data);
  }
}

module.exports = new Controller();
