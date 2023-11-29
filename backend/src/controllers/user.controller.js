const fs = require('fs');
const User = require('../models/User');

module.exports.index = async (req, res) => {};

module.exports.save = async (req, res) => {
    User.findById(req.body.id).then(model => {
        model.username = req.body.username;
        model.displayName = req.body.displayName;
        model.url = req.body.url;
        model.bio = req.body.bio;
        model.save().then(err => {
            const accessToken = model.generateAccessToken();

            res.json({ success: true, model, accessToken });
        })
    })
};

module.exports.upload = async (req, res) => {
    User.findById(req.body.id).then(model => {
        if (model.avatar !== 'avatar.png' && req.body.flag === '1') {
            fs.unlink(`upload/${model.avatar}`, err => console.log(err));
        }
        else if (model.cover !== 'cover.png' && req.body.flag === '2') {
            fs.unlink(`upload/${model.cover}`, err => console.log(err));
        }

        if (req.body.flag === '1') {
            model.avatar = `${req.files[0].filename}`;
        }
        else if (req.body.flag === '2') {
            model.cover = `${req.files[0].filename}`;
        }
        model.save().then(err => {
            res.json({ success: true, accessToken: model.generateAccessToken() });
        });
    })
}