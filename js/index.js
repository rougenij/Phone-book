let data = [
  {
    img: "https://raw.githubusercontent.com/rougenij/Phone-book/main/assets/Dan.jpg",
    name: "Dan Salvatori",
    number: "0597684218",
    age: 37,
    address: "Haifa",
    email: "DanSalvatori@gmail.com",
    notes: "Dan is a great man if I ever need assistance with the mafia.",
  },
  {
    img: "https://raw.githubusercontent.com/rougenij/Phone-book/main/assets/Karen.jpg",
    name: "Karen Booma",
    number: "0534562845",
    age: 35,
    address: "Tel Aviv",
    email: "KarenBooma@hotmail.com",
    notes: "My boss",
  },
  {
    img: "https://raw.githubusercontent.com/rougenij/Phone-book/main/assets/Lara.jpg",
    name: "Anya Lorance",
    number: "0559521234",
    age: 28,
    address: "Haifa",
    email: "Anya123@gmail.com",
    notes: "Bestie#1",
  },
  {
    img: "https://raw.githubusercontent.com/rougenij/Phone-book/main/assets/Mike.jpg",
    name: "Mike Tomi",
    number: "0596549874",
    age: 40,
    address: "Eilat",
    email: "MichaelTomi@gmail.com",
    notes: "Mike the ice cream man :P",
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
        <p class="number">${user.number}</p>
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
}

// Function that resets the list to be empty and sets a line of text indicating that it is empty.
function deleteAll() {
  if (confirm("Are you sure you want to delete everyone?")) {
    list.innerHTML = `
      <h2 class="sub-info">No users added yet.</h2>
    `;
    data = [];
    isEmpty = true;
  }
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
        <label for="input-email" class="info-label">Email:</label>
        <input type="email" placeholder="Email@email.com" id="input-email" />
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
        <label for="input-notes" class="info-label">Notes:</label>
        <textarea name="input-notes" placeholder="Notes go here" id="input-notes"></textarea>
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
              <label for="input-email" class="info-label">Email:</label>
              <input type="email" placeholder="Email@email.com" id="input-email" />
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
              <label for="input-notes" class="info-label">Notes:</label>
              <textarea name="input-notes" placeholder="Notes go here" id="input-notes"></textarea>
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
    const email = document.getElementById("input-email");
    const age = document.getElementById("input-age");
    const address = document.getElementById("input-address");
    const notes = document.getElementById("input-notes");
    const img = document.getElementById("input-image");

    name.value = user.name;
    number.value = user.number;
    email.value = user.email;
    age.value = user.age;
    address.value = user.address;
    notes.value = user.notes;
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
    <img
          class="pfp info-pfp"
          src="${user.img}"
          alt="${user.name} image"
    />

    <div class="info-item">
      <span class="info-label">Contact Name:</span> <span class="info-info">${
        user.name
      }</span>
    </div>

    <div class="info-item">
      <span class="info-label">Contact Number:</span> <span class="info-info">${
        user.number
      }</span>
    </div>

    ${
      user.email.trim() === ""
        ? ""
        : `
        <div class="info-item">
          <span class="info-label">Email:</span> <span class="info-info">${user.email}</span>
        </div>
        `
    }
    
    ${
      user.age.trim() === ""
        ? ""
        : `
        <div class="info-item">
          <span class="info-label">Contact Age:</span> <span class="info-info">${user.age}</span>
        </div>`
    }
    
    ${
      user.address.trim() === ""
        ? ""
        : `
        <div class="info-item">
          <span class="info-label">Contact Address:</span> <span class="info-info">${user.address} </span>
        </div>
      `
    }
    
    ${
      user.notes.trim() === ""
        ? ""
        : `
        <div class="info-item">
          <span class="info-label">Notes:</span> <span class="info-info">${user.notes}</span>
        </div>
      `
    }
  </div>
  `;
};

//Functions that change contacts
// Function that takes the inputted information from the user inside the input fields and adds to list and saves it in data.
function saveUser(e) {
  e.preventDefault();

  const name = document.getElementById("input-name");
  const number = document.getElementById("input-number");
  const email = document.getElementById("input-email");
  const age = document.getElementById("input-age");
  const address = document.getElementById("input-address");
  const notes = document.getElementById("input-notes");
  const img = document.getElementById("input-image");

  if (
    name.value !== "" &&
    number.value !== "" &&
    (email.value === "" || validateEmail(email.value)) &&
    checkUser(number.value, name.value)
  ) {
    if (img.value === "") {
      img.value =
        "https://raw.githubusercontent.com/rougenij/Phone-book/main/assets/user.png";
    }
    const newUser = {
      img: img.value.trim(),
      name: name.value.trim(),
      email: email.value.trim(),
      number: fixNumber(number.value.trim()),
      age: age.value.trim(),
      address: address.value.trim(),
      notes: notes.value.trim(),
    };

    data.push(newUser);
    setUpUsers();
    document.getElementById("myModal").style.display = "none";
  } else if (!checkUser(number.value, name.value))
    alert("Name or Number already exists. Please user a different one.");
  else alert("Please insert a name and a valid phone number!");
}

// Function that deletes a user/person from the data and list.
function deleteUser(phoneID) {
  if (confirm(`Are you sure you want to delete user with number ${phoneID}?`)) {
    data = data.filter((user) => user.number !== phoneID);
    document.querySelector(`#number-${phoneID}`).remove();
    if (data.length === 0) {
      isEmpty = true;
      list.innerHTML = `
      <h2 class="sub-info">No users added yet.</h2>
      `;
    }
  }
}

//Function that saves contact edit
const saveEdit = (e, phoneID) => {
  e.preventDefault();

  const user = data.filter((user) => user.number === phoneID)[0];

  const name = document.getElementById("input-name");
  const number = document.getElementById("input-number");
  const email = document.getElementById("input-email");
  const age = document.getElementById("input-age");
  const address = document.getElementById("input-address");
  const notes = document.getElementById("input-notes");
  const img = document.getElementById("input-image");

  if (
    name.value !== "" &&
    number.value !== "" &&
    (email.value === "" || validateEmail(email.value)) &&
    checkUser(number.value, name.value, phoneID)
  ) {
    user.name = name.value.trim();
    user.number = fixNumber(number.value.trim());
    user.email = email.value.trim();
    user.age = age.value.trim();
    user.address = address.value.trim();
    user.img = img.value.trim();
    user.notes = notes.value.trim();

    const userHTML = document.getElementById(`number-${phoneID}`);
    userHTML.innerHTML = `
    <div class="flex-center-between left-side">
        <img
        class="pfp"
        src="${user.img}"
        alt="${user.name} image"
        />
        <p class="name">${user.name}</p>
        <p class="number">${user.number}</p>
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
  } else if (!validateEmail(email.value))
    alert("Please enter a valid email address");
  else if (!checkUser(number.value, name.value, phoneID))
    alert("Name or Number already exists. Please user a different one.");
  else {
    alert("Please enter name and a valid phone number");
  }
};

// Event Listener on input that listens to search bar input and filters the list accordingly
search.addEventListener("input", (e) => {
  const filteredList = data.filter((user) => {
    return user.name.toLowerCase().includes(e.target.value.toLowerCase());
  });

  list.innerHTML = "";
  filteredList.forEach((user) => addUser(user));
});

// Event listener for the hover effect on users list items with event delegation.
addEventListener("mouseover", (e) => {
  if (e.target.closest("li"))
    e.target.closest("li").classList.add("item-hover");
});

addEventListener("mouseout", (e) => {
  if (e.target.closest("li"))
    e.target.closest("li").classList.remove("item-hover");
});

// Email Validation Function
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Function that takes a number that starts with a symbol and removes it.
function fixNumber(number) {
  if (number[0] === "+" || number[0] === "-") return number.slice(1);
  return number;
}

// Function that checks if name or number already exists
function checkUser(number, name, phoneID = "") {
  let temp = data;
  if (phoneID !== "") temp = temp.filter((user) => user.number !== phoneID);
  const user = temp.filter(
    (user) =>
      user.number === number || user.name.toLowerCase() === name.toLowerCase()
  );
  if (user.length >= 1) return false;
  return true;
}
