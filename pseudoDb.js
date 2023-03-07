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


