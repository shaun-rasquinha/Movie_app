module.exports = app => {
    const movies = require("../controllers/movie.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all movies
    router.get("/", movies.findAllMovies);
  
    // Retrieve movies by status
    router.get("/status/:status", movies.findMoviesByStatus);
  
    // Retrieve a single movie with id
    router.get("/:id", movies.findOne);
  
    // Retrieve movies with shows
    router.get("/shows", movies.findShows);
  
    app.use("/api/movies", router);
  };
  