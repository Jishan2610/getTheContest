const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios").default;
const Port = 8000;
const cors = require("cors");

const myApp = express();
myApp.use(cors());
const url2 = "https://codeforces.com/contests";
const url1 =
  "https://www.codechef.com/contests?itm_medium=navmenu&itm_campaign=allcontests";
const date = [];

myApp.get("/results", (req, res) => {
  //codeforces
  axios(url2)
    .then((response) => {
      let html = response.data;
      // console.log(html);
      let $ = cheerio.load(html);
      let cnt = 0;
      $("a[target=_blank]>span", html).each(function () {
        if (cnt == 0) {
          let dt = $(this).text();
          // console.log(dt + " " + cnt);
          date.push({ dt });
        }
        cnt++;
      });
      // res.json(date);
      console.log(date);
    })
    .catch((error) => console.log(error));
  res.json(date);
});
myApp.listen(Port, console.log(`server is running on Port ${Port}`));
