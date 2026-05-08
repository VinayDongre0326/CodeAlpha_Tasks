// Load Indian User Data

let fetchData = () => {

  let indianUsers = [

    {
      name: "Aarav Pawar",
      username: "aarav.pawar",
      email: "aarav@gmail.com",
      phone: "9876526210",
      address: {
        city: "Mumbai"
      }
    },

    {
      name: "Priya Shinde",
      username: "priya.shinde",
      email: "priya@gmail.com",
      phone: "9123456780",
      address: {
        city: "Pune"
      }
    },

    {
      name: "Rohan Patil",
      username: "rohan.patil",
      email: "rohan@gmail.com",
      phone: "9988776655",
      address: {
        city: "Pune"
      }
    },

    {
      name: "Sneha Reddy",
      username: "sneha.reddy",
      email: "sneha@gmail.com",
      phone: "9871234567",
      address: {
        city: "Hyderabad"
      }
    },

    {
      name: "Aditya Singh",
      username: "aditya.singh",
      email: "aditya@gmail.com",
      phone: "9765432109",
      address: {
        city: "Bangalore"
      }
    },

    {
      name: "Neha Joshi",
      username: "neha.joshi",
      email: "neha@gmail.com",
      phone: "9876549876",
      address: {
        city: "Nagpur"
      }
    },

    {
      name: "Vinay Dongre",
      username: "vinay.dongre",
      email: "vinay@gmail.com",
      phone: "9090909090",
      address: {
        city: "New-York"
      }
    },

    {
      name: "Pooja Nair",
      username: "pooja.nair",
      email: "pooja@gmail.com",
      phone: "8888888888",
      address: {
        city: "Kochi"
      }
    },

    {
      name: "Vikram Kumar",
      username: "vikram.kumar",
      email: "vikram@gmail.com",
      phone: "9898989898",
      address: {
        city: "Chennai"
      }
    },

    {
      name: "Ananya Gupta",
      username: "ananya.gupta",
      email: "ananya@gmail.com",
      phone: "9000011111",
      address: {
        city: "Jaipur"
      }
    }

  ];

  // Store data in localStorage

  localStorage.setItem(
    "users",
    JSON.stringify(indianUsers)
  );

  // Display data

  displayData();
};


// Display Users in Table

let displayData = () => {

  let tbody = document.getElementById("tbody");

  tbody.innerHTML = "";

  let storedUser = JSON.parse(
    localStorage.getItem("users")
  );

  storedUser.map((user, index) =>

    tbody.innerHTML += `

      <tr>

        <td>${index + 1}</td>

        <td>${user.name}</td>

        <td>${user.username}</td>

        <td>${user.email}</td>

        <td>${user.phone}</td>

        <td>${user.address.city}</td>

      </tr>

    `
  );
};


// Initial Data Load

fetchData();


// Add New User

let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {

  // Prevent page refresh

  e.preventDefault();

  // Get input values

  const email = document.getElementById("email").value;

  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  const name = document.getElementById("name").value;

  const city = document.getElementById("city").value;

  const phone = document.getElementById("phone").value;


  // Validation

  if (
    email === "" ||
    username === "" ||
    password === "" ||
    name === "" ||
    city === "" ||
    phone === ""
  ) {

    alert("Please fill all fields");

    return;
  }


  // User Object

  let postObject = {

    email,
    password,
    name,
    phone,
    username,

    address: {
      city: city
    }

  };


  // AJAX POST Request

  let xhr = new XMLHttpRequest();

  xhr.open(
    "POST",
    "https://jsonplaceholder.typicode.com/users/"
  );

  xhr.setRequestHeader(
    "Content-type",
    "application/json; charset=UTF-8"
  );

  xhr.send(JSON.stringify(postObject));


  // Response Handling

  xhr.onload = () => {

    if (xhr.status == 201) {

      let storedUser = JSON.parse(
        localStorage.getItem("users")
      );

      // Add new user at top

      storedUser.unshift(postObject);

      // Update localStorage

      localStorage.setItem(
        "users",
        JSON.stringify(storedUser)
      );

      // Refresh table

      displayData();

      // Clear form

      document.getElementById("email").value = "";

      document.getElementById("username").value = "";

      document.getElementById("password").value = "";

      document.getElementById("name").value = "";

      document.getElementById("city").value = "";

      document.getElementById("phone").value = "";

      // Success message

      alert("User Added Successfully");
    }
  };

});