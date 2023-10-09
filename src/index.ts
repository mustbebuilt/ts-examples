import express from "express";
import routes from "./routes/routes";
import "./db";
const app = express();
// Middleware for parsing JSON bodies
app.use(express.json());
// Mount the routes
app.use("/", routes);


// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});