const quotes = [
    {
      quote: "I never dreamed about success, I worked for it.",
      author: "Estee Lauder",
    },
    {
      quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just on more time.",
      author: "Thomas Edison",
    },
    {
      quote:
        "Happiness depends upon ourselves.",
      author: "Aristotle",
    },
    {
      quote: "Action is the foundational key to all success.",
      author: "Pablo Picasso",
    },
    {
      quote: "To fall in love with yourself is the first secret to happiness.",
      author: "Robert Morley",
    },
    {
      quote: "Lighten up on yourself. No one is pefect. Gently accept your humanness",
      author: "Deborah Day",
    },
    {
      quote: "I like criticism. It makes you strong.",
      author: "LeBron James",
    },
    {
      quote: "It is kind of fun to do the impossible.",
      author: "Walt Disney",
    },
    {
      quote: "Grind Hard, Shine Hard.",
      author: "Dwayne Johnson",
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//round : 반올림 ceil : 올림 floor : 내림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `
-${todaysQuote.author}-`;