// import User from "./Mongodb.js";
import { User } from "./Mongodb";
exports.createEmploye = async (req, resp) => {
  try {
    const newEmploye = new User(req.body);
    await newEmploye.save(); // if succussfully created then show this
    resp.status(201).json(newEmploye);
  } catch (error) {
    console.log("employe is not created ");
    resp.status(501).json({ error: "internal server error" });
  }
};

// exports.createUser = async (req, res) => {
//   try {
//     // this creates a newusers by using a rewuirement from a userfiles in mongodb
//     const newUser = new User(req.body); // this mean create a new users froma request body
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
// this is a request to be fetched from a backend to front end by id
exports.getUserById = async (req, res) => {
  try {
    // here a purpose of a await is to delay till request is done from a databse
    // User.findbyId() is query given by a mongoose
    const user = await User.findById(req.params.id); // wait till a db query is find this user by their id
    // tis is mainly mean from a requested routes find out id
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user); // if found send this response to front end
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
