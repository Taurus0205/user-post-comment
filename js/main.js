const elUserList = document.querySelector(".user-list");
const elPostList = document.querySelector(".post-list");

const elUserTemplate = document.querySelector(".user-template").content;
const elPostTemplate = document.querySelector(".post-template").content;

// fetch users
async function fetchUserArr() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  userRender(data, elUserList);
}

fetchUserArr();

// render users
function userRender(userArr, element) {
  element.innerHTML = null;
  const userFragment = document.createDocumentFragment();

  userArr.forEach((user) => {
    const userTemplate = elUserTemplate.cloneNode(true);
    userTemplate.querySelector(".user-name").textContent = user.name;
    userTemplate.querySelector(".user-id").textContent = user.id;
    userTemplate.querySelector(".user-nickname").textContent = user.username;
    userTemplate.querySelector(".user-email").textContent = user.email;
    userTemplate.querySelector(".user-address").textContent =
      user.address.city +
      ", " +
      user.address.street +
      ", " +
      user.address.suite +
      ", " +
      user.address.zipcode;
    userTemplate.querySelector(".user-adress-link").href =
      "https://www.google.com/maps/place/" +
      user.address.geo.lat +
      "," +
      user.address.geo.lng;

    userTemplate.querySelector(".user-phone").textContent = user.phone;
    userTemplate.querySelector(".user-website").textContent = user.website;
    userTemplate.querySelector(".user-company-name").textContent =
      user.company.name;
    userTemplate.querySelector(".user-company-phrase").textContent =
      user.company.catchPhrase;
    userTemplate.querySelector(".user-company-bs").textContent =
      user.company.bs;

    userFragment.appendChild(userTemplate);
  });

  element.appendChild(userFragment);
}

// fetch posts
async function fetchPostArr() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  renderPosts(data, elPostList);
  console.log(data);
}

fetchPostArr();

// render posts

function renderPosts(postArr, element) {
  element.innerHTML = null;
  const postFragment = document.createDocumentFragment();

  postArr.forEach((post) => {
    const postTemplate = elPostTemplate.cloneNode(true);
    postTemplate.querySelector(".post-title").textContent = post.title;
    postTemplate.querySelector(".post-body").textContent = post.body;

    postFragment.appendChild(postTemplate);
  });

  element.appendChild(postFragment);
}
