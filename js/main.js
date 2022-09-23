var quotes = [
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "― Robert Frost",
    },
    {
        quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        author: "― J.K. Rowling",
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain",
    },
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "― Elbert Hubbard",
    },
    {
        quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        author: "― Oscar Wilde",
    },
    {
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "― Mahatma Gandhi",
    },
    {
        quote: "“We accept the love we think we deserve.”",
        author: "― Stephen Chbosky",
    },
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde",
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein",
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa",
    },
]


function addQuote(){
    var rand = Math.floor(Math.random() * 10);
    document.getElementById("quote").innerHTML = quotes[rand].quote;
    document.getElementById("author").innerHTML = quotes[rand].author
}



    