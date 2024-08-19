module.exports = mongoose => {
    const Movie = mongoose.model(
      "movie",
      mongoose.Schema(
        {
          title: String,
          genres: [String],
          artists: [String],
          release_date: Date,
          status: String
        },
        { timestamps: true }
      )
    );
    return Movie;
  };
  