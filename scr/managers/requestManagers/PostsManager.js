const {apiRequest} = require('../index')

function getPosts() {
  return apiRequest.get('/posts')
}

function createPost(body) {
  return apiRequest.post('/posts').send(body)
}

module.exports = {
  getPosts,
  createPost
}