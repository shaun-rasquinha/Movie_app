const db = require("../models");
const Movie = db.movies;

// Retrieve all movies
exports.findAllMovies = (req, res) => {
  Movie.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies."
      });
    });
};

// Retrieve movies by status
exports.findMoviesByStatus = (req, res) => {
  const status = req.params.status;
  Movie.find({ status: status })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies by status."
      });
    });
};

// Retrieve a single movie by ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Movie with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Movie with id=" + id
      });
    });
};

// Retrieve movies with shows
exports.findShows = (req, res) => {
  Movie.find({ shows: { $exists: true, $not: { $size: 0 } } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving movies with shows"
      });
    });
};
