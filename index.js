const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: "accessKeyId",
  secretAccessKey: "secretAccessKey",
  region: 'region'
});

const lambda = new AWS.Lambda();

const functionName = "welcomeEmail";

const payload = {};

const params = {
  FunctionName: functionName,
  Payload: JSON.stringify(payload),
};

lambda.invoke(params, function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
