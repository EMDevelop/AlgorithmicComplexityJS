console.log(module.exports);
// These are scoped to this file
let url = 'some string heheheeh';

function log(message) {
  // send HTTP request
  console.log(message);
}

module.exports.log = log;
module.exports.endpoint = url;
