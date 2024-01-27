const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require("http");
const { log } = require("console");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/
server = http.createServer((request, response) => {
  log(request);
});

const port = 5000;

server.listen(port, log("Successfully started the server on port 5000 ", port));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
