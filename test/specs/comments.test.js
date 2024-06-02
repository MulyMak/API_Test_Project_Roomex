const CommentsPage = require('../../modules/comments.module')
const PostsPage = require('../../modules/posts.module')


describe('COMMENTS', () => {
  it('Validating Random Post Comments to Have Emails', async () => {
    await PostsPage.getRandomPostId()
    await CommentsPage.getCommentsByPostId(PostsPage.randomPostId)
    await CommentsPage.validateCommentsEmailsExist()
  })
})
