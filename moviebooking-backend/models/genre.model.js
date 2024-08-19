module.exports = mongoose => {
    const Genre = mongoose.model(
      "genre",
      mongoose.Schema(
        {
          name: String
        },
        { timestamps: true }
      )
    );
    return Genre;
  };
  