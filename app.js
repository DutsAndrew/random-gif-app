const img = document.querySelector('img');
const apiKey = 'https://api.giphy.com/v1/gifs/translate?api_key=2BmRJkYKyfUPozz932Zr7uUhsr5ANcqR';
const searchTerms = '&s=';
let searchItem = '';
const submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', defineSearchValue);

function defineSearchValue() {
  let searchBarValue = document.querySelector('#search-bar').value;
  searchItem = searchBarValue;
  let fetchItem = apiKey + searchTerms + searchItem;

  fetch(fetchItem, {mode: 'cors'})
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Network response was not okay');
    } else {
      return response.json();
    }
  })
  .then(function(response) {
    console.log(response.data.images.original.url);
    img.src = response.data.images.original.url;
  })
  .catch((error) => {
    console.log('Error:', error);
    alert('search attempt failed, please try again');
  });
}

