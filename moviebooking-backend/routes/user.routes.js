module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // User sign up
    router.post("/signup", users.signUp);
  
    // User login
    router.post("/login", users.login);
  
    // User logout
    router.post("/logout", users.logout);
  
    app.use("/api/users", router);
  };
  