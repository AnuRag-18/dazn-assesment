module.exports = app => {
    const movies = require("../controllers/movie.controller");
    const router = require('express').Router();

    router.post("/", movies.createMovie);
    router.get("/", movies.findByQuery);
    router.put('/', movies.updateMovie);
    router.delete('/', movies.deleteMovie);
    // router.delete("/",);
    app.use('/api/movies', router);
}