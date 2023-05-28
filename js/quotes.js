const quotes = [
  {
    quote:
      "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
    sources: "Joshua 1:9",
  },
  {
    quote: "I can do everything through him who gives me strength.",
    sources: "Philippians 4:13",
  },
  {
    quote: "The LORD is my shepherd, I shall not be in want.",
    sources: "Psalms 23:1",
  },
  {
    quote: "Hatred stirs up dissension, but love covers over all wrongs.",
    sources: "Proverbs 10:12",
  },
  {
    quote:
      "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    sources: "John 3:16",
  },
  {
    quote: "We make our own plans, but the LORD decides where we will go.",
    sources: "Proverbs 16:9",
  },
  {
    quote:
      "For everything God created is good, and nothing is to be rejected if it is received with thanksgiving.",
    sources: "1 Timothy 4:4",
  },
  {
    quote: "Do not be overcome by evil, but overcome evil with good.",
    sources: "Romans 12:21",
  },
  {
    quote:
      "I may walk through valleys as dark as death, but I won't be afraid. You are with me, and your shepherd's rod makes me feel safe.",
    sources: "Psalms 23:4",
  },
  {
    quote:
      "Shout praises to the LORD! He is good to us, and his love never fails.",
    sources: "Psalms 107:1",
  },
];

const quote = document.querySelector("#quote span:first-child");
const sources = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
sources.innerText = todaysQuote.sources;
