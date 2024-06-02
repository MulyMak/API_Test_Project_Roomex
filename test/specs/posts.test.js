const PostsPage = require('../../modules/posts.module')


describe('POSTS', () => {
  it('Validating a New Post Response', async () => {
    await PostsPage.createPost('Test', 'Hello World', 3)
    await PostsPage.validateNewPostResponse()
  })
})
