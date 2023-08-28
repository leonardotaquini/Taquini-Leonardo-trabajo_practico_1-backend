import User from "./User.js";
import Post from "./Post.js";
import Comment from "./Comment.js";

User.hasMany(Post, { foreignKey:'userId', hooks: true });
Post.belongsTo(User, { foreignKey:'userId', hooks: true});

User.hasMany(Comment, { foreignKey: 'userId' , hooks: true});
Comment.belongsTo(User, { foreignKey: 'userId', hooks: true});

Post.hasMany(Comment, { foreignKey: 'postId', hooks: true});
Comment.belongsTo(Post, { foreignKey: 'postId', hooks: true});

export { User, Post, Comment };