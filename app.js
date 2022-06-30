const img = document.querySelector('img');
const apiKey = 'https://api.giphy.com/v1/gifs/translate?api_key=2BmRJkYKyfUPozz932Zr7uUhsr5ANcqR';
const searchTerms = '&s=';
const submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', defineSearchValue);

 async function defineSearchValue() {
  let searchBarValue = document.querySelector('#search-bar').value;
  let searchItem = apiKey + searchTerms + searchBarValue;

  try {
    const response = await fetch(searchItem, {mode: 'cors'})
    const searchData = await response.json();
    img.src = searchData.data.images.original.url;
  } catch (error) {
    console.error(error);
    alert('the server could not find what you were looking for, please try again :)');
  }
}

