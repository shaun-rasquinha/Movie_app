module.exports = mongoose => {
    const Artist = mongoose.model(
      "artist",
      mongoose.Schema(
        {
          name: String
        },
        { timestamps: true }
      )
    );
    return Artist;
  };
  