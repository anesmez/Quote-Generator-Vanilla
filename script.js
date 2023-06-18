// here we will fetch the quote from the quote api

const quoteDisplay = document.getElementsByClassName('quote')[0];
const AuthorDisplay = document.getElementsByClassName('author')[0];
const container = document.getElementsByClassName('container')[0];
const addQuoteBtn = document.getElementsByClassName('new-btn')[0];
const addFavBtn = document.getElementsByClassName('fav-btn')[0];


const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    console.log(data);
    quoteInsert(data.content, data.author);
}

const quoteInsert = (quote, author) => {
    quoteDisplay.innerHTML = quote;
    AuthorDisplay.innerHTML = '~' + author;
}

const addFav = () => {
    const quote = quoteDisplay.innerHTML;
    const author = AuthorDisplay.innerHTML;
    const quoteObj = {
        quote,
        author
    }
    let quotes = localStorage.getItem('quotes');
    if (quotes == null) {
        quotes = [];
    } else {
        quotes = JSON.parse(quotes);
    }
    quotes.push(quoteObj);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    alert('Quote added to favourites');
}

addFavBtn.addEventListener('click', addFav);
addQuoteBtn.addEventListener('click', getQuote);