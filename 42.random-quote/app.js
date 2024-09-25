const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const quoteButton = document.querySelector('.btn');

quoteButton.addEventListener('click', generateQuote);



// https://www.shopify.com/blog/motivational-quotes
const arrayOfQuotes = [
    {
        author: "Madara Uchiha",
        quote: " Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility."
    },
    {
      author: "Albert Einstein",
      quote:
        "We cannot solve problems with the kind of thinking we employed when we came up with them",
    },
    {
      author: " Mark Twain",
      quote:
        "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    },
    {
      author: "Eleanor",
      quote:
        "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
    },
    {
      author: "Norman Vincent Peale",
      quote: "When you change your thoughts, remember to also change your world.",
    },
    {
      author: "Walter",
      quote:
        "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. ",
    },
    {
      author: "Diane McLaren",
      quote:
        "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
    },
    {
      author: "Dale Carnegie",
      quote:
        "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    },
];

function generateQuote() {
    const index = Math.floor(Math.random() * arrayOfQuotes.length);
    quote.innerHTML = `<span>${arrayOfQuotes[index].quote}</span>`;
    author.innerHTML = `<small>${arrayOfQuotes[index].author}</small>`;
}