const db = require("../models/movies.model");

exports.createMovie = (req, res) => {
    // if (!req.body.id) {
    //     res.status(400).send({ message: "movie id cannot be empty" });
    //     return;
    // }
    //create a new movie
    const movie = new db({
        id: req.body.id,
        title: req.body.title,
        genre: req.body.genre,
        streamingLink: req.body.streamingLink,
        rating: req.body.rating
    });
    //save movie in database
    movie
        .save(movie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured while creating movie "
            })
        })
};


exports.findByQuery = (req, res) => {
    const title = req.query.title;

    var query = { title: title };

    db.find(query)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
};

exports.updateMovie = (req, res) => {
    const title = req.params.title;

    db.findOneAndUpdate(title, req.body)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update movie with id=${title}`
                });
            }
            else {
                res.send({ message: "Movie updated" });
            }
        }).catch(err => {
            res.send(500).send({
                message: "Error while updating movie with id=" + title
            });
        });
};


exports.deleteMovie = (req, res) => {
    const id = req.body.id;
    db.findOneAndDelete(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Movie is not found" });
            } else {
                res.send({
                    message: "Movie is deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

