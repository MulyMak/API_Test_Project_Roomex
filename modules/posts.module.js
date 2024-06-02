const PostsManager = require('../scr/managers/requestManagers/PostsManager');
const NumbersHelper = require('../scr/helpers/NumbersHelper');
const {expect} = require('chai');

class Posts {

  constructor() {
    this.randomPostId = ''
    this.newPostData = ''
    this.newPostTitle = ''
    this.newPostBody = ''
    this.newPostUserId = ''
  }

  async getRandomPostId() {
    await PostsManager.getPosts().then((res) => {
      expect(res.status).to.eq(200, 'The Posts were Not Received')
      this.randomPostId = res.body[NumbersHelper.randomIndexGenerator(0, res.body.length)].id
    });
  }

  async createPost(title, body, userId) {
    let reqBody = {
      title,
      body,
      userId
    }
    await PostsManager.createPost(reqBody)
      .then((res) => {
        expect(res.status).to.eq(201, 'Post was Not Created')
        expect(res.body.id).to.exist
        this.newPostData = res.body
        this.newPostTitle = title
        this.newPostBody = body
        this.newPostUserId = userId
      })
  }


  async validateNewPostResponse() {
    expect(this.newPostData.title).to.eq(this.newPostTitle, 'Title is Incorrect')
    expect(this.newPostData.body).to.eq(this.newPostBody, 'Body is Incorrect')
    expect(this.newPostData.userId).to.eq(this.newPostUserId, 'UserId is Incorrect')
    expect(this.newPostData.id).to.exist
  }
}

module.exports = new Posts()