const Film = require('../mongoose/Film');
const db = require('../services/db');


module.exports = {
    movies: (req, res) => {
        Film.find().exec()
        .then(movies => {
            res.send(movies);
        })
        .catch(error => {
            console.log(error);
        });
    },

    sort: (req, res) => {
        Film.find().exec()
        .then(movies => {
            res.send(db.sortdb(movies, req));
        })
        .catch(error => {
            console.log(error);
        });
    },

    findByName: (req, res) => {
        Film.findOne({ title: req.params.name})
        .then(film => {
            res.send(film);
        })
        .catch(error => {
            console.log(error);
        });
    },

    findById: (req, res) => {
        Film.findOne({ id: req.params.id})
        .then(film => {
            res.send(film);
        })
        .catch(error => {
            console.log(error);
        });
    }
};