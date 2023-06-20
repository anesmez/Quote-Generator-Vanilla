// here we will fetch the quote from the quote api

const quoteDisplay = document.getElementsByClassName('quote')[0];
const AuthorDisplay = document.getElementsByClassName('author')[0];
const container = document.getElementsByClassName('container')[0];
const addQuoteBtn = document.getElementsByClassName('new-btn')[0];
const addFavBtn = document.getElementsByClassName('fav-btn')[0];
const copyBtn = document.getElementsByClassName('cpy-btn')[0];


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

const copyQuote = () => {
    const textToCopy = quoteDisplay.innerHTML + ' ' + AuthorDisplay.innerHTML;
    navigator.clipboard.writeText(textToCopy);
    alert('Quote copied to clipboard');
}

copyBtn.addEventListener('click', copyQuote);

const unfavBtn = document.getElementsByClassName('unfav-btn');

const addToFav = () => {
    const listItem = document.createElement('li');

    const favQuote = document.createElement('div');
    favQuote.classList.add('fav-quote');
    favQuote.innerText = quoteDisplay.innerText;

    const favAuthor = document.createElement('div');
    favAuthor.classList.add('fav-author');
    favAuthor.innerText = '~' + AuthorDisplay.innerText;

    const unfavBtn = document.createElement('button');
    unfavBtn.classList.add('unfav-btn');
    unfavBtn.innerHTML = '<i class="fa-solid fa-trash icon"></i> Remove';

    unfavBtn.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.appendChild(favQuote);
    listItem.appendChild(favAuthor);
    listItem.appendChild(unfavBtn);

    const favList = document.getElementsByClassName('fav-list')[0];

    favList.appendChild(listItem);

}

addFavBtn.addEventListener('click', addToFav);
addQuoteBtn.addEventListener('click', getQuote);