const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//one user has many posts, each post belongs to one user
User.hasMany(Post, {
  foreignKey: 'creator_id',
});

Post.belongsTo(User, {
  foreignKey: 'creator_id',
});

// one blogpost has many comments, each comment belongs to one post
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// one user has many comments, each comment belongs to one user
User.hasMany(Comment, {
  foreignKey: 'creator_id',
});

Comment.belongsTo(User, {
  foreignKey: 'creator_id',
})

module.exports = { User, Post, Comment };