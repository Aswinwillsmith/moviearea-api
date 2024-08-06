import express, { urlencoded } from "express";
import movieRoutes from "./routes/movies.routes.js";
import connectDB from "./library/db.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(urlencoded({ extended: true }));
connectDB();
app.get("/", (req, res) => {
  res.json({ Msg: "Hello students" });
});

app.use("/movies/", movieRoutes);

app.listen(PORT, () => {
  console.log(`the server is running at http://localhost:${PORT}`);
});
