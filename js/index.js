const data = [
  {
    img: "../assets/Dan.jpg",
    name: "Dan Salvatori",
    number: "0597684218",
    address: "Haifa",
  },
  {
    img: "../assets/Karen.jpg",
    name: "Karen Booma",
    number: "0521544362",
    address: "Tel Aviv",
  },
  {
    img: "../assets/Lara.jpg",
    name: "Lara Lorance",
    number: "0559521234",
    address: "Haifa",
  },
  {
    img: "../assets/Mike.jpg",
    name: "Mike Tomi",
    number: "0596549874",
    address: "Eilat",
  },
];
const list = document.querySelector(".list");

data.forEach((elem) => addUser(elem));

function addUser(user) {
  if (list.innerHTML == `<h2 class="no-users">No users added yet.</h2>`)
    list.innerHTML = "";
  const li = document.createElement("li");
  li.classList = "flex item";
  li.innerHTML = `
    <div class="flex">
        <img
        class="pfp"
        src="${user.img}"
        alt="${user.name} image"
        />
        <p class="name">${user.name}</p>
    </div>
    <div class="flex">
        <button class="icon-btn">
        <i class="fa-solid fa-circle-info"></i>
        </button>
        <button class="icon-btn">
        <i class="fa-solid fa-user-pen"></i>
        </button>
        <button class="icon-btn">
        <i class="fa-solid fa-user-minus"></i>
        </button>
    </div>
  `;
  list.append(li);
}

function deleteAll() {
  list.innerHTML = `
    <h2 class="no-users">No users added yet.</h2>
  `;
}
