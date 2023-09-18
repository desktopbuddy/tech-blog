const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all user's blogposts
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        creator_id: req.session.user_id
      },
      order: [['date_created', 'DESC']],
      include: [
        {
          model: User,
          attributes: {
            include: ['username'],
            exclude: ['password'],
          }
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

    const posts = postData.map((post) => post.get({ plain: true }));
    
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET new post page
router.get('/new', withAuth, async (req, res) => {
  res.render('new-post');
})

module.exports = router;