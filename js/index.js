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
        <label for"name" class="desc-label">Contact Name:</label>
        <input type="text" placeholder="John Doe..."  id="input-name"/>
      </div>
    
      <div class="form-item">
        <label for="number" class="desc-label">Contact Number:</label>
        <input type="text" placeholder="0595234585..." id="input-number" />
      </div>
    
      <div class="form-item">
        <label for="name" class="desc-label">Contact Address:</label>
        <input type="text" placeholder="Any town,123" id="input-address" />
      </div>
    
      <div class="form-item">
        <label for="age" class="desc-label">Contact Age:</label>
        <input type="text" placeholder="25..." id="input-age"/>
      </div>

      <div class="form-item">
        <label for="image" class="desc-label">Contact Image:</label>
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

// Function adds a user/person into the list
function addUser(user) {
  // If the list is empty then reset the list by removing a line of text.
  if (list.innerHTML == `<h2 class="no-users">No users added yet.</h2>`)
    list.innerHTML = "";

  // Creating a list item element and setting it up
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
        <button class="icon-btn" onclick="userInfo('${user.number}')">
        <i class="fa-solid fa-circle-info"></i>
        </button>
        <button class="icon-btn" onclick="editUser('${user.number}')">
        <i class="fa-solid fa-user-pen"></i>
        </button>
        <button class="icon-btn">
        <i class="fa-solid fa-user-minus"></i>
        </button>
    </div>
  `;
  list.append(li);
}

// Function that resets the list to be empty and sets a line of text indicating that it is empty.
function deleteAll() {
  list.innerHTML = `
    <h2 class="sub-info">No users added yet.</h2>
  `;
}

//popup functions
// Function that opens the modal popup
function openModal(num) {
  document.getElementById("myModal").style.display = "flex";
}

// Function that closes the modal popup
function closeModal(event) {
  if (
    event.target === document.getElementById("closeModalBtn") ||
    event.target === document.getElementById("myModal")
  )
    document.getElementById("myModal").style.display = "none";
}

// Function that opens the modal popup and sets it up for a new person/user to be added into the list.
const addNewUser = () => {
  openModal();

  const div = document.getElementById("modal-container");
  div.innerHTML = formHTML;
};

// Function that opens the modal popup and sets it up with a user/person information to be edited and saved into the list.
const editUser = (phoneID) => {
  openModal();

  const div = document.getElementById("modal-container");

  const user = data.filter((user) => user.number === phoneID)[0];
  if (user === undefined) {
    div.innerHTML = `
      <h2 class="sub-info">Could not find person with ${phoneID}</h2>
    `;
  } else {
    div.innerHTML = formHTML;

    //Selecing the inputs
    const name = document.getElementById("input-name");
    const number = document.getElementById("input-number");
    const age = document.getElementById("input-age");
    const address = document.getElementById("input-address");
    const img = document.getElementById("input-image");

    name.value = user.name;
    number.value = user.number;
    age.value = user.age;
    address.value = user.address;
    img.value = user.img;
  }
};

// Function that opens the modal popup and inserts existing user/person information.
const userInfo = (phoneID) => {
  openModal();

  const div = document.getElementById("modal-container");
  const user = data.filter((user) => user.number === phoneID)[0];

  div.innerHTML = `
  <div class="info-flex">
    <div class="info-item">
      <span class="desc-label">Contact Name:</span> <span>${user.name}</span>
    </div>
    <div class="info-item">
      <span class="desc-label">Contact Number:</span> <span>${user.number}</span>
    </div>
    <div class="info-item">
      <span class="desc-label">Contact Age:</span> <span>${user.age}</span>
    </div>
    <div class="info-item">
      <span class="desc-label">Contact Address:</span> <span>${user.address} </span>
    </div>
  </div>
  
  `;
};
