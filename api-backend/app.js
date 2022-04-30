const express= require("express");
const mongoose=require("mongoose");
const cors = require("cors");

const app=express();

app.use(express.json());
app.use(cors({ exposedHeaders: "token" }));

app.use(require("./middlewares/auth"));

mongoose.connect("mongodb+srv://admin:admin@cluster0.lb5fb.mongodb.net/projectDb",()=>{
    console.log("Connected to Database");
});
app.use("/auth", require("./routes/auth"));
app.use("/users",require("./routes/users"));
app.use("/home",require("./routes/home"));

app.listen(5000,()=>{
    console.log("Server started on port 5000");
});
