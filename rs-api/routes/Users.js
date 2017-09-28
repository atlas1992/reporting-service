var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/:Username?', function (req, res, next) {

    if (req.params.Username) {

        User.getUserByUsername(req.params.Username, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        User.getAllUsers(function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
});
router.post('/', function (req, res, next) {

    User.addUser(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
router.delete('/:Username', function (req, res, next) {

    User.deleteUser(req.params.Username, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});
router.put('/:Username', function (req, res, next) {

    User.updateUser(req.params.Username, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;