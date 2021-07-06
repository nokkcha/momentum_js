const quotes = [
{
    quote:"The only thing we have to fear is fear itself.",
    author:"Franklin D. Roosevelt",
},
{
    quote:"All the world’s a stage, and all the men and women merely players.",
    author:"William Shakespeare",
},
{
    quote:"Eighty percent of success is showing up.",
    author:"Woody Allen",
},
{
    quote:"Elementary, my dear Watson.",
    author:"Sherlock Holmes ",
},
{
    quote:"Go ahead, make my day.",
    author:"Harry Callahan ",
},
{
    quote:"If you want something done right, do it yourself.",
    author:"Charles-Guillaume Étienne",
},
{
    quote:"I'll be back.",
    author:"Terminator ",
},
{
    quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author:"Albert Einstein",
},
{
    quote:"That’s one small step for a man, a giant leap for mankind.",
    author:"Neil Armstrong",
},
{
    quote:"To be or not to be, that is the question.",
    author:"William Shakespeare",
},

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todayQuotes = quotes[Math.floor(Math.random()* quotes.length)];
//math module: Math.random()

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author; 