// async function fetchApi() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const ans = await response.json();
//   console.log("The Fetched Data : ", ans);
// }
// fetchApi();

// import axios from "axios";
// async function fetchApi() {
//   const response = await axios("https://jsonplaceholder.typicode.com/users");
//   console.log("The Fetched Data : ", response);
// }
// fetchApi();

async function fetchMultipleApi() {
  const urls = [
    "https://dummyjson.com/products",
    "https://dummyjson.com/todos",
    "https://dummyjson.com/users",
  ];

  const promises = urls.map((item) => fetch(item).then((res) => res.json()));
  const data = await Promise.all(promises);

  console.log("The fetched data : ", data);
}

fetchMultipleApi();
