const data = [
  {
    img: "https://raw.githubusercontent.com/rougenij/Phone-book/main/assets/Dan.jpg",
    name: "Dan Salvatori",
    number: "0597684218",
    age: 37,
    address: "Haifa",
  },
  {
    img: "https://raw.githubusercontent.com/rougenij/Phone-book/main/assets/Karen.jpg",
    name: "Karen Booma",
    number: "0534562845",
    age: 35,
    address: "Tel Aviv",
  },
  {
    img: "https://raw.githubusercontent.com/rougenij/Phone-book/main/assets/Lara.jpg",
    name: "Lara Lorance",
    number: "0559521234",
    age: 28,
    address: "Haifa",
  },
  {
    img: "https://raw.githubusercontent.com/rougenij/Phone-book/main/assets/Mike.jpg",
    name: "Mike Tomi",
    number: "0596549874",
    age: 40,
    address: "Eilat",
  },
];

const formHTML = `
 <form>
  <div>
      <div class="form-item">
        <label for"name">Contact Name:</label>
        <input type="text" placeholder="John Doe..."  id="input-name"/>
      </div>
    
      <div class="form-item">
        <label for="number">Contact Number:</label>
        <input type="text" placeholder="0595234585..." id="input-number" />
      </div>
    
      <div class="form-item">
        <label for="name">Contact Address:</label>
        <input type="text" placeholder="Any town,123" id="input-address" />
      </div>
    
      <div class="form-item">
        <label for="age">Contact Age:</label>
        <input type="text" placeholder="25..." id="input-age"/>
      </div>

      <div class="form-item">
        <label for="image">Contact Image:</label>
        <input type="text"  id="input-image"/>
      </div>
    
      <div class="form-item">
        <button class="input-btn" onclick="saveContact()">Save</button>
      </div>
    </div>
  </form>
  `;

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
        <button class="icon-btn" onclick="userInfo(${user.number})">
        <i class="fa-solid fa-circle-info"></i>
        </button>
        <button class="icon-btn" onclick="editUser(${user.number})">
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

//popup functions
function openModal(num) {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal(event) {
  if (
    event.target === document.getElementById("closeModalBtn") ||
    event.target === document.getElementById("myModal")
  )
    document.getElementById("myModal").style.display = "none";
}

//Add a new userr
const addNewUser = () => {
  openModal();

  const div = document.getElementById("modal-container");
  div.innerHTML = formHTML;
};

const editUser = (phoneID) => {
  openModal();

  const div = document.getElementById("modal-container");
  div.innerHTML = formHTML;

  //Selecing the inputs
  const name = document.getElementById("input-name");
  const number = document.getElementById("input-number");
  const age = document.getElementById("input-age");
  const address = document.getElementById("input-address");
  const img = document.getElementById("input-image");

  phoneID = "0" + phoneID;
  const user = data.filter((user) => user.number === phoneID)[0];

  name.value = user.name;
  number.value = user.number;
  age.value = user.age;
  address.value = user.address;
  img.value = user.img;
};

const userInfo = (phoneID) => {
  openModal();

  const div = document.getElementById("modal-container");
  phoneID = "0" + phoneID;
  const user = data.filter((user) => user.number === phoneID)[0];

  div.innerHTML = `
  <div class="info-flex">
    <div class="info-item">
      Contact Name:<span>${user.name}</span>
    </div>
    <div class="info-item">
      Contact Number: <span>${user.number}</span>
    </div>
    <div class="info-item">
      Contact Age: <span>${user.age}</span>
    </div>
    <div class="info-item">
      Contact Address: <span>${user.address} </span>
    </div>
  </div>
  
  `;
};
