//Imports
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("./proto/registerEuroMil.proto", {});
const euromilPackage = grpc.loadPackageDefinition(packageDefinition).euromil;

// Create a server
const server = new grpc.Server();

// Add the service
server.addService(euromilPackage.Euromil.service, {
  RegisterEuroMil: RegisterEuroMil,
});

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
  console.log("gRPC server running at http://127.0.0.1:50051");
  server.start();
});

function RegisterEuroMil(call, callback) {
  const { key, checkid } = call.request;

  let message = "Failed to register Euromil";
  
  if (key && key.split("-").length == 7 && checkid.length == 16) {
    message = "Euromil was registered with success";
  }

  callback(null, { message: message });
}
