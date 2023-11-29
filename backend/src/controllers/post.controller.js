const Post = require('../models/Post');

module.exports.save = (req, res) => {
    const model = new Post;
    model.track_id = req.body.track_id;
    model.code = req.body.code;
    model.author = req.body.id;
    model.save().then(err => {
        res.json({ success: true, model });
    });
}

module.exports.upload = (req, res) => {
    Post.findById(req.body.id).then(model => {
        model.thumbnail = req.files[0].filename;
        model.save().then(err => {
            res.json({ success: true });
        });
    });
}