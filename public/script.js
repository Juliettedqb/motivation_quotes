console.log('script.js loaded');

getQuotes();

async function getQuotes() {
    const response = await fetch('/quotes');
    const data = await response.json();
    console.log(data[0].quote);
    document.getElementById("quote").innerHTML = data[0].quote;
}