import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

const port = 3009;

app.get("/login", (req, res) => {
  const { name } = req.query;
  if (name) {
    res.cookie("name", name);
    res.send(`Cookie set with name: ${name}`);
  } else {
    res.send("Please provide a name query parameter.");
  }
});

app.get("/hello", (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.send(`Welcome ${name}!`);
  } else {
    res.send("Please log in first.");
  }
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
