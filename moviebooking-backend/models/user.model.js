module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          first_name: String,
          last_name: String,
          email: String,
          password: String,
          access_token: String,
          uuid: String
        },
        { timestamps: true }
      )
    );
    return User;
  };
  