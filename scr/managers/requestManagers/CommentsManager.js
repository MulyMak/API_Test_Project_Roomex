const {apiRequest} = require('../index')

function getCommentsByPostId(postId) {
  return apiRequest.get(`/comments?postId=${postId}`)
}


module.exports = {
  getCommentsByPostId
}