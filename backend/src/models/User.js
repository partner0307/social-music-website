const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Pull in Environment variables
const ACCESS_TOKEN = {
  secret: process.env.AUTH_ACCESS_TOKEN_SECRET,
  expiry: process.env.AUTH_ACCESS_TOKEN_EXPIRY,
};

/* 
1. CREATE USER SCHEMA
 */

const User = mongoose.Schema;

const UserSchema = new User({
  firstname: { type: String, trim: true },
  lastname: { type: String, trim: true },
  email: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  displayName: { type: String, trim: true },
  password: { type: String, trim: true },
  avatar: { type: String, required: true, trim: true },
  cover: { type: String, required: true, trim: true },
  followers: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  posts: [{ type: mongoose.Types.ObjectId, ref: 'Post' }],
  bio: { type: String, trim: true },
  isHost: { type: Boolean, required: true, default: false }
});

/* 
2. ATTACH MIDDLEWARE
 */
UserSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.pre('findOne', async function (next) {
  try {
    this.populate('posts');
    next();
  } catch (error) {
    next(error);
  }
})

/* 
3. ATTACH CUSTOM INSTANCE METHODS
 */
UserSchema.methods.generateAccessToken = function () {
  const user = this;

  // Create signed access token
  const accessToken = jwt.sign(
    {
      id: user._id.toString(),
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      displayName: user.displayName,
      bio: user.bio,
      avatar: user.avatar,
      cover: user.cover,
      email: user.email,
      following: user.following,
      followers: user.followers,
      isHost: user.isHost
    },
    ACCESS_TOKEN.secret,
    {
      expiresIn: ACCESS_TOKEN.expiry,
    }
  );

  return accessToken;
};

/* 
4. ATTACH CUSTOM STATIC METHODS
 */

/* 
5. COMPILE MODEL FROM SCHEMA
 */
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
