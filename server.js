const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require("http");
const { log } = require("console");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/
server = http.createServer((request, response) => {
  let reqBody = "";
  request.on("data", (data) => {
    reqBody += data;
  });
  request.on("end", () => {
    request.body = parseBody(reqBody);
    sendFormPage(request, response);
  });
});

const port = 5000;

server.listen(port, log("Successfully started the server on port ", port));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
