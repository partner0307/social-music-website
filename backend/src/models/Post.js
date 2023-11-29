const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  author: { type: mongoose.Types.ObjectId, ref: 'User' },
  track_id: { type: String, trim: true },
  code: { type: String, trim: true },
  thumbnail: { type: String, trim: true },
  followers: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Post', schema);