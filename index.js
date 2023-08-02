import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://restcountries.com/v3.1/all/"; 
var flags =[];


async function getFlags() {
  try {
    const result = await axios.get(API_URL + "?fullText=true&fields=flags");
    flags = result.data;

  } catch (error) {
    console.log(error.message);
  }
}


app.get("/", (req, res) => {
  res.render("index.ejs", flags[Math.floor(Math.random() * flags.length)]);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


getFlags();