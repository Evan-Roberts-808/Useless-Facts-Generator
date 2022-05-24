const factContainer = document.getElementById('fact-container');
const factText = document.getElementById('fact');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newFactBtn = document.getElementById('new-fact');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
    loader.hidden = false;
    factContainer.hidden = true;
}

// Hide Loading

function complete() {
    factContainer.hidden = false;
    loader.hidden = true;
}

// Show New Fact

function newFact() {
    loading();
    // Pick a random fact from fact array

    const fact = localFacts[Math.floor(Math.random() * localFacts.length)];
    authorText.textContent = fact.author;

    // Check fact length to determine styling

    if (fact.text.length > 120) {
        fact.text.classList.add('long-fact');
    } else {
        factText.classList.remove('long-fact');
    }
    // Set Fact, Hide Loader
    factText.textContent = fact.text;
    complete();
}

// Tweet Fact

function tweetFact() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${factText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners

newFactBtn.addEventListener('click', newFact);
twitterBtn.addEventListener('click', tweetFact);

// On Load
newFact();
