const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());
const verifyJWT = require("./middleware/verifyJWT")

// const corsOptions = {
//     origin: 'http://localhost:3000',
// };
// app.use(cors(corsOptions));


const blogController = require("./Controllers/blogController");
const userController = require("./Controllers/userController");

app.get("/", blogController.getBlog);
app.get("/blog/:id", verifyJWT, blogController.getBlogDetails);
app.post("/BlogPost", blogController.postBlog);
app.get("/User", userController.getUserData);
app.post("/Signup", userController.registerUser);
app.post("/Login", userController.loginUser);

app.listen(5000, () => { console.log("Server started on port 5000") });

