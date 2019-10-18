require("dotenv").config();
const express = require("express"),
  session = require("express-session"),
  massive = require("massive"),
  controller = require("./controller"),
  { SERVER_PORT, CONNECTION_STRING } = process.env,
  app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("database connected");
});

//ENDPOINTS
app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.addHouse);
app.delete("/api/houses/:id", controller.deleteHouse);

const port = SERVER_PORT;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
