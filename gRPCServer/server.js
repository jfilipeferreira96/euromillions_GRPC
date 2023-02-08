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

function areNumbersUniqueAndBelowLimit(array, limit) {
  let uniqueNumbers = new Set(array);
  return uniqueNumbers.size === array.length && Math.max(...array) < limit;
}

function RegisterEuroMil(call, callback) {
  const { key, checkid } = call.request;

  let message = "Failed to register Euromil";

  const checkEuroMilKey = (key) => {
    message = "Invalid Euromillions key";

    if (key.length !== 7) {
      return false;
    }
    let numbers = key.slice(0, 5);
    let stars = key.slice(5);

    if (!areNumbersUniqueAndBelowLimit(numbers, 50) || !areNumbersUniqueAndBelowLimit(stars, 12)) {
      return false;
    }

    return true;
  };

  if (checkEuroMilKey(key.split("-")) && checkid.length == 16) {
    message = "Euromil was registered with success";
  }

  callback(null, { message: message });
}
