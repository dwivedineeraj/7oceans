const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const FarmerController = require("./controllers/farmers");
const CropController = require("./controllers/crops")
const mongoose = require("mongoose")

// IMP: let compassstring = "mongodb+srv://neeraj:ChjLoozfrePpni1P@cluster0.pdeqjex.mongodb.net/"

mongoose.connect("mongodb+srv://neeraj:ChjLoozfrePpni1P@cluster0.pdeqjex.mongodb.net/wildfarm?retryWrites=true&w=majority");

mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB");
});

// Event listener for connection error
mongoose.connection.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

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

router.route("/createFarmer").post(FarmerController.createFarmer);

router.route("/loginFarmer").post(FarmerController.loginFarmer);

router.route("/logoutFarmer").post(FarmerController.logoutFarmer);

router.use(async (req, res, next) => {
  await FarmerController.checkLoggedIn(req, res);
  if (!res.locals.farmer) res.send({"status": "logged out"}); 
  else next();
});

router.route("/checkLoggedIn").post((req, res) => {
  if (res.locals.farmer) res.send({"status": "logged in"});
});
// router.route("/addCrop").post(CropController.addCrop);

app.use("", router);

app.listen(3001, () => {
  console.log("test");
});