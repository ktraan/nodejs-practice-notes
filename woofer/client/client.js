// console.log("yass");

const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const API_URL = "http://localhost:5000/woofs";

loadingElement.style.display = "none";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Grab the data from the form
  const formData = new FormData(form);
  const name = formData.get("name");
  const content = formData.get("content");

  // Send the data to an object
  const woof = {
    name,
    content,
  };

  form.style.display = "none";
  loadingElement.style.display = "";

  // Fetch the user's data
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(woof),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((createdWoof) => {
      console.log(createdWoof);
    });
});
