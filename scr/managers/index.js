const supertest = require("supertest");

const apiRequest = supertest('https://jsonplaceholder.typicode.com')

module.exports = {
  apiRequest
}


