const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// CREATE new post
router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      creator_id: req.session.user_id,
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE post
router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update({
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id
      }
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// DELETE post
router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;