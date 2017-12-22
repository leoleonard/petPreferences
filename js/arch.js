// zadanie 12.4


var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById("get-joke");
button.addEventListener("click", function() {
  getJoke();
});

var paragraph = document.getElementById("joke");

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", function() {
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
};

paragraph.innerHTML = response.value.joke;

// zadanie 12.5

var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";



function getQuote() {
    $.getJSON(quoteUrl, createTweet);
}

function createTweet(input) {
    var data = input[0];

    var quoteText = $(data.content).text().trim();
    var quoteAuthor = data.title;

    if (!quoteAuthor.length) {
        quoteAuthor = "Unknown author";
    }



  var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;

  if (tweetText.length > 140) {
      getQuote();
  } else {
      var tweet = tweetLink + encodeURIComponent(tweetText);
      $('.quote').text(quoteText);
      $('.author').text("Author: " + quoteAuthor);
      $('.tweet').attr('href', tweet);
  }
}

$(document).ready(function() {
    getQuote();
    $(".trigger").click(function() {
        getQuote();
    })
});
