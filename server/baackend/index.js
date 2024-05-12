import express from "express";
import bodyParser from "body-parser";
// import { router } from "./component/routes.js";
import { User } from "./component/Mongodb.js";
import e from "express";

const app = express();
const port = 1000;

app.use(bodyParser.json());

// Route for handling POST requests to /api/users
app.post("/message", async (req, res) => {
  res.json({ message: "hello this is from a server " });
});
// this will start as server !!
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
