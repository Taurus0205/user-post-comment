const elUserList = document.querySelector(".user-list");
const elUserTemplate = document.querySelector(".user-template").content;

async function fetchUserArr() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  console.log(data);
  userRender(data, elUserList);
}

fetchUserArr();

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
    userTemplate.querySelector(".user-name").textContent = user.name;
    userTemplate.querySelector(".user-name").textContent = user.name;
    userTemplate.querySelector(".user-name").textContent = user.name;
    userTemplate.querySelector(".user-name").textContent = user.name;
    userTemplate.querySelector(".user-name").textContent = user.name;
    userTemplate.querySelector(".user-name").textContent = user.name;

    userFragment.appendChild(userTemplate);
  });

  element.appendChild(userFragment);
}
