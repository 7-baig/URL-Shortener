// Information to reach API
const apiKey = '554b5b27161f4eadaec5de8f7c8b5a47';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  // We’re including this information because the API expects to see an object with a key destination that has a value of a URL.
  const data = JSON.stringify({destination: urlToShorten});
  // new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);  
    }
  }
  xhr.open('POST', url);
  // To access the Rebrandly API, we need a header with two  key-value pairs. In the header, you must include values for 'Content-type' and an 'apikey'.
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
  
};



// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
