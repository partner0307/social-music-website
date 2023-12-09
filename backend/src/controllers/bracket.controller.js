const fs = require('fs');
const Bracket = require('../models/Bracket');
const User = require('../models/User');
const useRandomGenerator = require('../service/randomGenerator');

module.exports.index = (req, res) => {
    Bracket.find().sort({ createdAt: -1 }).populate('posts').then(model => {
        res.json({ success: true, model });
    });
}

module.exports.save = (req, res) => {
    const { id, user, title, start_date, voting_date, details, prizes, rules, max_player } = req.body;
    let url = useRandomGenerator();

    Bracket.findById(id).then(model => {
        if (!model) {
            model = new Bracket;
        }
        model.title = title;
        model.start_date = start_date;
        model.vote_date = voting_date;
        model.creator = user;
        model.details = details;
        model.prizes = prizes;
        model.rules = rules;
        model.max_player = max_player;
        model.url = url;
        model.banner = 'banner.png';
        model.save().then(err => {
            model.populate('posts', err => {
                res.json({ success: true, model });
            })
        });
    });
}

module.exports.edit = (req, res) => {

}

module.exports.remove = (req, res) => {

}

module.exports.upload_image = (req, res) => {
    Bracket.findById(req.body.id).then(model => {
        if (model.banner !== 'banner.png') {
            fs.unlink(`upload/${model.banner}`, err => console.log(err));
        }
        model.banner = req.files[0].filename;
        model.save().then(err => {
            model.populate('posts', err => {
                res.json({ success: true, model });
            });
        });
    });
}

module.exports.remove_image = async (req, res) => {
    Bracket.findById(req.params.id).then(model => {
        if (model.banner !== 'banner.png') {
            fs.unlink(`upload/${model.banner}`, err => {
                model.banner = 'banner.png';
                model.save().then(err => {
                    model.populate('posts', err => {
                        res.json({ success: true, model });
                    });
                });
            });
        } else {
            model.populate('posts', err => {
                res.json({ success: true, model });
            });
        }
    })
}

module.exports.getByUrl = async (req, res) => {
    Bracket.findOne({ url: req.params.url }).populate('posts').then(model => {
        if (model)
            res.json({ success: true, model });
        else
            res.json({ success: false });
    });
}