const quote = document.querySelector("blockquote");
const author = document.querySelector(".quote-box span");

const newQuote = document.querySelector(".new-qte-btn");
const tweetBtn = document.querySelector(".tweet-btn");
console.log(tweetBtn);

const URL = "https://api.quotable.io/random";

async function getRandomQuote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        quote.innerHTML = data.content;
        author.innerHTML = `- ${data.author}`;

    } catch (err) {
        console.log("Error: Something is wrong!", err);
    }
}

function getNewQuote() {
    getRandomQuote(URL);
}

newQuote.addEventListener("click", getNewQuote);

// Initial quote retrieval
getRandomQuote(URL);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML + "  " + author.innerHTML,"tweet window","width=600, height=300")
}

tweetBtn.addEventListener("click",tweet);