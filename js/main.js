const elUserList = document.querySelector(".user-list");
const elPostList = document.querySelector(".post-list");
const elCommentList = document.querySelector(".comment-list");

const elUserTemplate = document.querySelector(".user-template").content;
const elPostTemplate = document.querySelector(".post-template").content;
const elCommentTemplate = document.querySelector(".comment-template").content;

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

    userTemplate.querySelector(".user-post-btn").dataset.userId = user.id;

    userFragment.appendChild(userTemplate);
  });

  element.appendChild(userFragment);
}

// fetch posts
async function fetchPostArr() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  elUserList.addEventListener("click", (evt) => {
    if (evt.target.matches(".user-post-btn")) {
      const userId = evt.target.dataset.userId;
      let foundPost = [];
      data.forEach((row) => {
        if (row.userId == userId) {
          foundPost.push(row);
        }
      });
      renderPosts(foundPost, elPostList);
    }
  });

  console.log(data);
}

fetchPostArr();

// render posts
function renderPosts(postArr, element) {
  element.innerHTML = null;
  const postFragment = document.createDocumentFragment();

  postArr.forEach((post) => {
    const postTemplate = elPostTemplate.cloneNode(true);
    postTemplate.querySelector(".post-Id").textContent = post.id;
    postTemplate.querySelector(".post-title").textContent = post.title;
    postTemplate.querySelector(".post-body").textContent = post.body;

    postFragment.appendChild(postTemplate);
  });

  element.appendChild(postFragment);
}

// render comments
function renderComments(commentArr, element) {
  element.innerHTML = null;
  const commentFragment = document.createDocumentFragment();

  commentArr.forEach((comment) => {
    const commentTemplate = elCommentTemplate.cloneNode(true);
    commentTemplate.querySelector(".comments-Id").textContent = comments.id;
    commentTemplate.querySelector(".comments-name").textContent = comments.name;
    commentTemplate.querySelector(".comments-email").textContent =
      comments.email;
    commentTemplate.querySelector(".comments-body").textContent = comments.body;

    commentFragment.appendChild(commentTemplate);
  });

  element.appendChild(commentFragment);
}
