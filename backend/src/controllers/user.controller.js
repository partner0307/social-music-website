const fs = require('fs');
const User = require('../models/User');

module.exports.index = async (req, res) => {
    User.findOne({ url: req.body.url }).then(model => {
        if (model) {
            model.populate('posts', err => {
                res.json({ success: true, model });
            })
        } else {
            res.json({ success: false });
        }
    })
};

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

module.exports.remove = async (req, res) => {
    console.log(req.params);
}

module.exports.follow = async (req, res) => {
    User.findOne({ url: req.body.url }).then(user => {
        if (user.followers.includes(req.body.id)) {
            const followers_temp = user.followers.filter(p => p.toString() !== req.body.id);
            user.followers = followers_temp;
            user.save().then(err => {
                User.findById(req.body.id).then(model => {
                    const following_temp = model.following.filter(p => p.toString() !== user._id.toString());
                    model.following = following_temp;
                    model.save().then(err => {
                        model.populate('posts', err => {
                            res.json({ success: true, user, accessToken: model.generateAccessToken() });
                        })
                    })
                })
            })
        } else {
            user.followers.push(req.body.id);
            user.save().then(err => {
                User.findById(req.body.id).then(model => {
                    model.following.push(user._id);
                    model.save().then(err => {
                        model.populate('posts', err => {
                            res.json({ success: true, user, accessToken: model.generateAccessToken() });
                        })
                    })
                })
            });
        }
    })
}

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

module.exports.remove_image = async (req, res) => {
    User.findById(req.body.id).then(model => {
        if (model.avatar !== 'avatar.png' && req.body.flag === 1) {
            fs.unlink(`upload/${model.avatar}`, err => {
                model.avatar = 'avatar.png';
                model.save().then(err => {
                    res.json({ success: true, accessToken: model.generateAccessToken() });
                });
            });
        }
        else if (model.cover !== 'cover.png' && req.body.flag === 2) {
            fs.unlink(`upload/${model.cover}`, err => {
                model.cover = 'cover.png';
                model.save().then(err => {
                    res.json({ success: true, accessToken: model.generateAccessToken() });
                });
            });
            
        }
    })
}