const { Post } = require('../models');

const postData = [
  {
    title: 'Why I love coding!',
    content: 'i love coding because blalalalblajlbalbalbal yayyyyy yipeee',
    creator_id: 1,
  }
  {
    title: 'What i learned in bootcamp!!',
    content: 'i learned sooo much in bootcamp like how to seed this data im writing right now. Cool!!!',
    creator_id: 2,
  }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports(seedPost);