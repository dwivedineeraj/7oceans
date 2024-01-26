const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const FarmerController = require("./controllers/farmers");
const CropController = require("./controllers/crops")
const mongoose = require("mongoose")

require('dotenv').config(); // Import dotenv package
const mongoUrl = process.env.MONGO_URL; // Get MongoDB URL from .env file
mongoose.connect(mongoUrl);

// mongoose.connection.on("open", () => {
//   console.log("Connected to MongoDB");
// });

// Event listener for connection error
// mongoose.connection.on("error", (error) => {
//   console.error("Error connecting to MongoDB:", error);
// });

// Rest of the code...

mongoose.connect(mongoUrl);

// mongoose.connection.on("open", () => {
//   console.log("Connected to MongoDB");
// });

// Event listener for connection error
// mongoose.connection.on("error", (error) => {
//   console.error("Error connecting to MongoDB:", error);
// });

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  const cookie = req.headers.cookie;
  if (cookie) {
    res.locals.cookie = cookie.split(";").reduce((tempvalues, item) => {
      const [name, value] = item.split("=");
      return {...tempvalues, [name]: value};
    }, {});
  } else res.locals.cookie = {};
  next();
});

const leads = [
  {
    id: "1",
    name: "John Doe",
    dob: "1990-01-01",
    guardianName: "Jane Doe",
    subject: "Math",
    trialDateTime: "2022-01-01T10:00:00Z",
    studentPhone: "1234567890",
    studentEmail: "john.doe@example.com",
    guardianPhone: "9876543210",
    guardianEmail: "jane.doe@example.com",
    gender: "Male",
    avatar: "https://example.com/avatar.jpg",
    pipelineId: "1",
    stageId: "1",
    activities: [
      {
        id: "1",
        updaterName: "Alice",
        updaterId: "A123",
        updateTime: "2022-01-01T12:00:00Z",
        description: "Activity 1",
      },
      {
        id: "2",
        updaterName: "Bob",
        updaterId: "B456",
        updateTime: "2022-01-02T09:00:00Z",
        description: "Activity 2",
      },
    ],
  },
  // Add more leads here if needed
];

const subjects = [
  {
    name: "Math",
    id: "1",
  },
  {
    name: "Science",
    id: "2",
  },
  // Add more subjects here if needed
];

const pipelines = [
  {
    name: "Pipeline 1",
    id: "1",
    stages: [
      {
        name: "Stage 1",
        id: "1",
        position: 1,
      },
      {
        name: "Stage 2",
        id: "2",
        position: 2,
      },
    ],
  },
  // Add more pipelines here if needed
];

app.get("/leads", (req, res) => {
  res.json(leads);
});

app.get("/subjects", (req, res) => {
  res.json(subjects);
});

app.get("/pipelines", (req, res) => {
  res.json(pipelines);
});

// router.route("/createFarmer").post(FarmerController.createFarmer);

// router.route("/loginFarmer").post(FarmerController.loginFarmer);

// router.route("/logoutFarmer").post(FarmerController.logoutFarmer);

// router.use(async (req, res, next) => {
//   await FarmerController.checkLoggedIn(req, res);
//   if (!res.locals.farmer) res.send({"status": "logged out"}); 
//   else next();
// });

// router.route("/checkLoggedIn").post((req, res) => {
//   if (res.locals.farmer) res.send({"status": "logged in"});
// });
// router.route("/addCrop").post(CropController.addCrop);

app.use("", router);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});