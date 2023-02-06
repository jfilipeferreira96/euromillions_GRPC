const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("./proto/registerEuroMil.proto", {});
const euromilPackage = grpc.loadPackageDefinition(packageDefinition).euromil;

const client = new euromilPackage.Euromil("localhost:50051", grpc.credentials.createInsecure());

client.RegisterEuroMil({ key: "123", checkid: "################" }, (err, response) => {
  if (response)
  {
    console.log(`Server returned the following object:`, JSON.stringify(response));
    console.log(response.message)
  } else{
    console.log(err);
  }
});
