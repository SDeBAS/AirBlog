const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const env = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRouter = require('./routes/user');

env.config();
const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: ["https://air-blog-frontend.vercel.app"],
  methods: ["POST", "GET","PUT","DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

app.use("/auth", authRoute);
app.use("/posts", postRoute);

app.get('/', (req, res) => {
  // Implement your logic to handle the request
  res.send('Hello from /backend/posts!');
});

app.use('/user', userRouter);

app.use(express.static(path.join(__dirname, "./client/public")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
