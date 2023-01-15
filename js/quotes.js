const quotes = [
  {
    quote: "Sometimes even to live is an act of courage.",
    author: "Seneca",
  },
  {
    quote: "We all have big changes in our lives that are more or less a second chance.",
    author: "Harrison Ford",
  },
  {
    quote: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "There is no cure for birth and death, save to enjoy the interval.",
    author: "George Santayana",
  },
  {
    quote: "Youth is something very new: twenty years ago no one mentioned it.",
    author: "Gabriel Coco Chanel",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
  },
  {
    quote: "No great man ever complains of want of opportunity.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "In the field of observation, chance favors only the prepared mind",
    author: "Louis Pasteur",
  },
  {
    quote: "We're so trendy we can't even escape ourselves.",
    author: "Kurt Cobain",
  },
  {
    quote: "The biggest adventure you can ever take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;