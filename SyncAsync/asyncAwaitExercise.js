// getCustomer(1, customer => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies(movies => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

function getCustomer(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email"
      });
    }, 2000);
  });
}

function getTopMovies() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["movies1", "movies2"]);
    }, 2000);
  });
}

function sendEmail(email, movies) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

(async function() {
  const customer = await getCustomer(1);
  console.log("Customer: ", customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log(`Top Movies: ${movies}`);
    await sendEmail(customer.email, movies);
    console.log("Email Sent...");
  }
})();
