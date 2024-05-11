const express = require("express")
const app = express();
 require("dotenv").config();
 require("./conn/conn.js");
// const cors = require("cors");
 const UserAPI = require("./routes/user.js");
 const TaskAPI = require("./routes/task.js");
// app.use(cors());
 app.use(express.json());
app.use("/api/v1", UserAPI);
app.use("/api/v2", TaskAPI);

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log("Server started");
});
