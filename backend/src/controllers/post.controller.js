const Post = require('../models/Post');
const User = require('../models/User');

module.exports.index = (req, res) => {
    User.findOne({ username: req.params.username }).populate('posts').exec().then(model => {
        res.json({ success: true, model });
    })
}

module.exports.save = (req, res) => {
    const model = new Post;
    model.track_id = req.body.track_id;
    model.code = req.body.code;
    model.author = req.body.id;
    model.save().then(err => {
        User.findById(req.body.id).then(user => {
            user.posts.push(model._id);
            user.save().then(err => {
                user.populate('posts', err => {
                    res.json({ success: true, user, accessToken: user.generateAccessToken() });
                })
            })
        })
    });
}