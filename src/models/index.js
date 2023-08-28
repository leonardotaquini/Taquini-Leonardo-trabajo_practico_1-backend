import User from "./User.js";
import Post from "./Post.js";
import Comment from "./Comment.js";

User.hasMany(Post, { foreignKey:'userId' });
Post.belongsTo(User, { foreignKey:'userId' });

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

export { User, Post, Comment };