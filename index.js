const express = require('express');
const app = express();
const port = 3000;

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

app.get('/quotes', async(request, response) => {
  // run code stuff
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ee7279b9bbmsh7172f99cef0519fp17ca96jsn6ac28430c532',
      'X-RapidAPI-Host': 'motivation-quotes-api.p.rapidapi.com'
    }
  };

  const fetchApi = await fetch('https://motivation-quotes-api.p.rapidapi.com/api/quotes', options);
  const quotes = await fetchApi.json();
  console.log(quotes)
  response.json(quotes);
    
});

app.post('/quotes', (req, res) => {
  const quote = write(req.body.quote);
  res.status(200).json(quote);
})


const fs = require("fs");

function readAll() {
    const json = fs.readFileSync("quote.json", { encoding: "utf8"});
    return JSON.parse(json)
}

function write(quote) {
  const json = fs.readFileSync("quote.json", { encoding: "utf8"});
  const quotes = [...JSON.parse(json), quote];
  fs.writeFileSync("quote.json", JSON.stringify(quotes));

  // fs.readFile("quote.json", 'utf8', (err, jsonString) => {
  //     let quotes = JSON.parse(jsonString)
  //     quotes.push(quote)
  //     console.log(jsonString, quotes);

  //     fs.writeFile("quote.json", JSON.stringify(quotes), (err)=>{
  //         console.log(err)
  //     })
  // });

  return quote;
}


