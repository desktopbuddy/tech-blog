const { User } = require('../models');

const userData = [
  {
    username: 'hambycookie',
    password: 'codingisfun',
  },
  {
    username: 'desktopbuddy',
    password: 'codingisawesome',
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;