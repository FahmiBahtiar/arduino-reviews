const express = require("express");
const route = express()
const port = 3000
const path = require("path");

const bodyParser = require("body-parser");
const connectDatabase = require("./backend/utils/mongodb")


route.use(bodyParser.json());
connectDatabase();

route.use(
    express.urlencoded({ extended: true })
);
    
route.use(express.json());
const review = require("./backend/routes/review");

route.use("/api/v1", review);


// route.get('/',(req,res) =>{
// console.log("hello World");
// res.send("Hallo")
// })


route.use(express.static(path.join(__dirname, "./Views")));


route.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Views/index.html"));
});



route.listen(port, () => {
    console.log(`Listening on port ${port}`);
});