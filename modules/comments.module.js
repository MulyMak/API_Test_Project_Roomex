const CommentsManager = require('../scr/managers/requestManagers/CommentsManager');
let {expect} = require('chai');

class Comments {

  constructor() {
    this.singlePostComments = []
  }

  async getCommentsByPostId(postId) {
    await CommentsManager.getCommentsByPostId(postId).then((res) => {
      expect(res.status).to.eq(200, 'Comments by Post Id were not Received')
      this.singlePostComments = res.body
    })
  }

  async validateCommentsEmailsExist() {
    this.singlePostComments.forEach(el => {
      expect(el.email.length !== 0, 'Comment Does Not Have an Email')
    })
  }
}

module.exports = new Comments()