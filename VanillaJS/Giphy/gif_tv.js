const API_KEY = "34hv8XzSGYWvjUkLhlya9bV5PoQ8elv9";
const tvArea = document.querySelector("#js-tv-area");

const contents = ["cat", "happy", "ah", "kim"];

function pushToTvDom(parsedData) {
  tvArea.innerHTML = null;
  const dataSet = parsedData.data;
  let i = 0;

  setInterval(() => {
    const imageURL = dataSet[i].images.fixed_height.url;

    tvArea.innerHTML = `<img src="${imageURL}" class= "img-center"/>`;
    i++;
    if (i >= dataSet.length) i = 0;
  }, 3000);
}

function searchTv() {
  // console.log(element);
  const keyword = contents[Math.floor(Math.random() * contents.length)];
  const URL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", event => {
    const rawData = event.target.response;
    const parsedData = JSON.parse(rawData);
    pushToTvDom(parsedData);
  });
}

document.addEventListener("DOMContentLoaded", searchTv);
