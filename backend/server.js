require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");   
const port = process.env.PORT || 3000;

const app = express();

const authRoute = require("./routes/auth");
const authPost = require("./routes/posts");
const authUser = require("./routes/user");

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log("Connected to the DB"))
    .catch(error => console.log(error));


app.get("/", async (req, res) => {
    res.send( "<h1>Hi there</h1>" );
})

app.use("/auth", authRoute);
app.use("/posts", authPost);
// app.use("/users", authUser);

app.listen(port, () => {
    console.log("Server started in port "+ process.env.PORT);
})