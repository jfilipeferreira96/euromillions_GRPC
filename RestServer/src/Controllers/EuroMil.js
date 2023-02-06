const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./src/proto/registerEuroMil.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});

const euromilPackage = grpc.loadPackageDefinition(packageDefinition).euromil;

const client = new euromilPackage.Euromil("localhost:50051", grpc.credentials.createInsecure());

class Controller {
  async grpcRequest(req, res) {
    let data = { message: `Something went wrong.` };
    let responseCode = 400;

    client.RegisterEuroMil({ key: "123", checkid: "################" }, (err, response) => {
      if (response) {
        console.log(`Server returned the following object:`, JSON.stringify(response));
        console.log(response.message);
      } else {
        console.log(err);
      }
    });

    res.status(responseCode).json(data);
  }
}

module.exports = new Controller();
