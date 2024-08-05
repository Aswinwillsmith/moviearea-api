// const http = require("http");
// const server = http.createServer((req, res) => {
//   //   console.log(req.method);
//   const { headers, url, method } = req;
//   console.log(headers);
//   console.log(url);
//   console.log(method);
//   res.setHeader("Content Type", "application/json");
//   res.end(JSON.stringify({ status: 200, message: "my first Api" }));
// });
// const PORT = 5000; //port 5000
// server.listen(PORT, () => console.log(`server running on ${PORT}`));
import express from "express";
import movieRoutes from "./routes/movies.routes.js";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.json({ Msg: "Hello students" });
});

app.use("/movies/", movieRoutes);

app.listen(PORT, () => {
  console.log(`the server is running at http://localhost:${PORT}`);
});
