const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require("path"); 
const env = require("dotenv");
const mongoose = require("mongoose"); 
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const userRouter = require('./routes/user');

env.config(); 
app.use(cors(
    {
        origin:["https://air-blog-frontend.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("connected to mongodb")).catch(err => console.log(err));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.use("/backend/auth", authRoute)
app.use("/backend/posts", postRoute)
app.use('/backend/user', userRouter);

app.use(express.static(path.join(__dirname, "./client/public")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/public', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running");
})
