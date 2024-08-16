let data = [
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
    name: "Anya Lorance",
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

const list = document.querySelector(".list");
const search = document.querySelector(".search-bar");

let isEmpty = false;

// Set up the initial people in list
setUpUsers();

// Function that sets up the array of people sorted by name into the list
function setUpUsers() {
  list.innerHTML = "";
  data.sort((user1, user2) => user1.name.localeCompare(user2.name));
  data.forEach((elem) => addUser(elem));
}

// Function adds a user/person into the list
function addUser(user) {
  // If the list is empty then reset the list by removing a line of text.
  if (isEmpty) {
    list.innerHTML = "";
    isEmpty = false;
  }

  // Creating a list item element and setting it up
  const li = document.createElement("li");
  li.classList = "flex-center-between item";
  li.id = `number-${user.number}`;
  li.innerHTML = `
    <div class="flex-center-between left-side">
        <img
        class="pfp"
        src="${user.img}"
        alt="${user.name} image"
        />
        <p class="name">${user.name}</p>
    </div>
    <div class="flex-center-between right-side">
        <button class="icon-btn" onclick="userInfo('${user.number}')">
        <i class="fa-solid fa-circle-info"></i>
        </button>
        <button class="icon-btn" onclick="editUser('${user.number}')">
        <i class="fa-solid fa-user-pen"></i>
        </button>
        <button class="icon-btn" onclick="deleteUser('${user.number}')">
        <i class="fa-solid fa-user-minus"></i>
        </button>
    </div>
  `;
  list.append(li);

  li.addEventListener("mouseover", () => {
    li.classList.add("item-hover");
  });

  li.addEventListener("mouseout", () => {
    li.classList.remove("item-hover");
  });
}

// Function that resets the list to be empty and sets a line of text indicating that it is empty.
function deleteAll() {
  list.innerHTML = `
    <h2 class="sub-info">No users added yet.</h2>
  `;
  data = [];
  isEmpty = true;
}

// Popup functions
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
  div.innerHTML = `
 <form>
  <div>
      <div class="form-item">
        <label for"input-name" class="info-label">Contact Name:</label>
        <input type="text" placeholder="John Doe..."  id="input-name"/>
      </div>
    
      <div class="form-item">
        <label for="input-number" class="info-label">Contact Number:</label>
        <input type="number" placeholder="0595234585..." id="input-number" />
      </div>
    
      <div class="form-item">
        <label for="input-address" class="info-label">Contact Address:</label>
        <input type="text" placeholder="Any town,123" id="input-address" />
      </div>
    
      <div class="form-item">
        <label for="input-age" class="info-label">Contact Age:</label>
        <input type="number" placeholder="25..." id="input-age"/>
      </div>

      <div class="form-item">
        <label for="input-image" class="info-label">Contact Image:</label>
        <input type="text"  id="input-image"/>
      </div>
    
      <div class="form-item">
        <button class="input-btn" onclick="saveUser(event)">Save</button>
      </div>
    </div>
  </form>
  `;
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
    div.innerHTML = `
     <form>
        <div>
            <div class="form-item">
              <label for"input-name" class="info-label">Contact Name:</label>
              <input type="text" placeholder="John Doe..."  id="input-name"/>
            </div>
          
            <div class="form-item">
              <label for="input-number" class="info-label">Contact Number:</label>
              <input type="number" placeholder="0595234585..." id="input-number" />
            </div>
          
            <div class="form-item">
              <label for="input-address" class="info-label">Contact Address:</label>
              <input type="text" placeholder="Any town,123" id="input-address" />
            </div>
          
            <div class="form-item">
              <label for="input-age" class="info-label">Contact Age:</label>
              <input type="number" placeholder="25..." id="input-age"/>
            </div>

            <div class="form-item">
              <label for="input-image" class="info-label">Contact Image:</label>
              <input type="text"  id="input-image"/>
            </div>
          
            <div class="form-item">
              <button class="input-btn" onclick="saveEdit(event,'${phoneID}')">Save</button>
            </div>
          </div>
      </form>
  `;
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
      <span class="info-label">Contact Name:</span> <span class="info-info">${user.name}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Contact Number:</span> <span class="info-info">${user.number}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Contact Age:</span> <span class="info-info">${user.age}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Contact Address:</span> <span class="info-info">${user.address} </span>
    </div>
  </div>
  
  `;
};

//Functions that change contacts
// Function that takes the inputted information from the user inside the input fields and saves it to an existing number if it exists otherwise adds.
function saveUser(e) {
  e.preventDefault();

  const name = document.getElementById("input-name");
  const number = document.getElementById("input-number");
  const age = document.getElementById("input-age");
  const address = document.getElementById("input-address");
  const img = document.getElementById("input-image");

  if (name.value != "" && number.value != "") {
    if (img.value == "") {
      img.value =
        "https://raw.githubusercontent.com/rougenij/Phone-book/main/assets/user.png";
    }
    const newUser = {
      img: img.value,
      name: name.value,
      number: number.value,
      age: age.value,
      address: address.value,
    };

    data.push(newUser);
    setUpUsers();
    document.getElementById("myModal").style.display = "none";
  } else alert("Dont leave empty fields!");
}

// Function that deletes a user/person from the data and list.
function deleteUser(phoneID) {
  data = data.filter((user) => user.number !== phoneID);
  document.querySelector(`#number-${phoneID}`).remove();
  if (data.length === 0) {
    isEmpty = true;
    list.innerHTML = `
    <h2 class="sub-info">No users added yet.</h2>
    `;
  }
}

//Function that saves contact edit
const saveEdit = (e, phoneID) => {
  e.preventDefault();

  const user = data.filter((user) => user.number === phoneID)[0];

  const name = document.getElementById("input-name");
  const number = document.getElementById("input-number");
  const age = document.getElementById("input-age");
  const address = document.getElementById("input-address");
  const img = document.getElementById("input-image");

  if (name.value != "" && number.value != "") {
    user.name = name.value;
    user.number = number.value;
    user.age = age.value;
    user.address = address.value;
    user.img = img.value;

    const userHTML = document.getElementById(`number-${phoneID}`);
    userHTML.innerHTML = `
    <div class="flex-center-between left-side">
        <img
        class="pfp"
        src="${user.img}"
        alt="${user.name} image"
        />
        <p class="name">${user.name}</p>
    </div>
    <div class="flex-center-between right-side">
        <button class="icon-btn" onclick="userInfo('${user.number}')">
        <i class="fa-solid fa-circle-info"></i>
        </button>
        <button class="icon-btn" onclick="editUser('${user.number}')">
        <i class="fa-solid fa-user-pen"></i>
        </button>
        <button class="icon-btn" onclick="deleteUser('${user.number}')">
        <i class="fa-solid fa-user-minus"></i>
        </button>
    </div>
  `;
    document.getElementById("myModal").style.display = "none";
  } else alert("Please enter name or phone number");
};

// Event Listener on input that listens to search bar input and filters the list accordingly
search.addEventListener("input", (e) => {
  const filteredList = data.filter((user) => {
    return user.name.toLowerCase().includes(e.target.value.toLowerCase());
  });

  list.innerHTML = "";
  filteredList.forEach((user) => addUser(user));
});
