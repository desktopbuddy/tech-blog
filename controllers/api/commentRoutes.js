const router = require('express').Router();
const { Comment } = require('../../models');

// post a new comment
router.post('/', async(req, res) => {
  try {
    const commentData = await Comment.create({
      content: req.body.content,
      post_id: req.body.post_id,
      creator_id: req.session.user_id,
    });

    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;