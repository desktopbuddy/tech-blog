const { Comment } = require('../models');

const commentData = [
  {
    content: 'i agree with this.',
    post_id: 1,
    creator_id: 2,
  }
  {
    content: 'ur a legend',
    post_id: 2,
    creator_id: 1,
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports(seedComment);