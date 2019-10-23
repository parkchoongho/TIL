// ES5
function makeRequest(url, method) {
  if (!method) {
    method = "GET";
  }
  console.log(url, method);
}

// ES6

function makeRequest2(url, method = "GET") {
  console.log(url, method);
}

makeRequest2("hello");
makeRequest2("hello", "POST");
