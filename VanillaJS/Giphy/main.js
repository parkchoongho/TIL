// const API_KEY = "34hv8XzSGYWvjUkLhlya9bV5PoQ8elv9";

// const button = document.querySelector("#js-button");
// const inputArea = document.querySelector("#js-input");
// const resultArea = document.querySelector("#result-area");

// function pushToDom(parsedData) {
//   resultArea.innerHTML = null;
//   const dataSet = parsedData.data;

//   dataSet.forEach(imageData => {
//     const imageURL = imageData.images.fixed_height.url;
//     const alt = imageData.title;
//     resultArea.innerHTML += `<img src="${imageURL}" alt="${alt}"/>`;
//   });
// }

// function searchAndPush(keyword) {
//   const URL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}`;
//   const GiphyAJAXCall = new XMLHttpRequest();
//   GiphyAJAXCall.open("GET", URL);
//   GiphyAJAXCall.send();

//   GiphyAJAXCall.addEventListener("load", event => {
//     const rawData = event.target.response;
//     const parsedData = JSON.parse(rawData);
//     pushToDom(parsedData);
//   });
// }

// button.addEventListener("click", () => {
//   searchAndPush(inputArea.value);
// });

// inputArea.addEventListener("keypress", event => {
//   if (event.which === 13) searchAndPush(inputArea.value);
// });
