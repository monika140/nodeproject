const User = require("../models/user");
const userValidator = require("../validator/userValidator");

const UserController = {
  // Create a new user
  createUser: async (req, res) => {
    try {
      // Validate user input
      const { error } = userValidator.validate(req.body);

      if (error) {
        console.log("Validation error:", error.details[0].message); // Log the validation error
        return res.status(400).json({ message: error.details[0].message });
      }

      // Create a new user instance
      const newUser = new User(req.body);

      // Save the new user to the database
      await newUser.save();

      // Send a success response with the created user
      res.status(201).json(newUser);
    } catch (error) {
      // Handle any internal server errors
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Search user by email
  searchByEmail: async (req, res) => {
    try {
      const email = req.params.email;
      console.log("Searching for user with email:", email);

      // Find a user in the database by email
      const user = await User.findOne({ email });
      console.log("Found user:", user);

      if (!user) {
        // If user not found, send a 404 response
        return res.status(404).json({ message: "User not found" });
      }
      // Send the user data in the response
      res.json(user);
    } catch (error) {
      // Handle any internal server errors or database errors
      console.error(error); //log the error for debugging
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Search user by ID
  searchById: async (req, res) => {
    try {
      // Find a user in the database by ID
      const user = await User.findById(req.params.id);
      if (!user) {
        // If user not found, send a 404 response
        return res.status(404).json({ message: "User not found" });
      }
      // Send the user data in the response
      res.json(user);
    } catch (error) {
      // Handle any internal server errors
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Delete user by ID
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      console.log("Deleting user with ID:", userId); // Log the ID being deleted

      // Find and delete a user in the database by ID
      const user = await User.findByIdAndDelete(userId);
      console.log("Deleted user:", user); // Log the result of findByIdAndDelete

      if (!user) {
        // If user not found, send a 404 response
        return res.status(404).json({ message: "User not found" });
      }
      // Send the deleted user data in the response
      res.json(user);
    } catch (error) {
      // Handle any internal server errors
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = UserController;
