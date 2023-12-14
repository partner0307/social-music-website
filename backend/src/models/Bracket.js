const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    creator: { type: mongoose.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true, trim: true },
    start_date: { type: Date, required: true, default: Date.now() },
    vote_date: { type: String, trim: true, default: Date.now() },
    banner: { type: String, trim: true },
    details: { type: String, trim: true },
    prizes: { type: String, trim: true },
    rules: { type: String, trim: true },
    max_player: { type: Number, default: 0 },
    url: { type: String, required: true, trim: true },
    posts: [{ type: mongoose.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

module.exports = mongoose.model('Bracket', schema);