const router = require('express').Router();
const { User, Post, Comment } = require('../models');


// GET all blogposts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password'],
            include: ['username'],
          },
        },
      ],
      order: [['date_created','DESC']],
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;