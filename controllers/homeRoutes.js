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

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a single blogpost
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password'],
            include: ['username'],
          },
        },
        {
          model: Comment,
          attributes: [
            'id',
            'content',
            'date_created',
            'creator_id'
          ],
          include: [
            {
              model: User,
              attributes: ['username'],
            }
          ],
        },
      ]
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    const post = postData.get({ plain: true });

    res.render('post', {
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;