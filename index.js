const express = require('express');
const app = express();
const port = 3000;

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



