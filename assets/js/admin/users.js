// Make a request for a user with a given ID

const users = document.getElementById("users");
function handelRender() {
  fetch(ApiUsers)
    .then(function (reponsive) {
      return reponsive.json();
    })
    .then(function (points) {
      let html = points.map(function (e) {
        return `
          
            <tr>
              <th scope="row">${e.id}</th>
              <td>${e.name}</td>
              <td>${e.account}</td>
              <td>${e.typeof == 1 ? "admin" : "user"}</td>
              <td>${e.address}</td>
              <td>
              
              <a href="./updateUser.html?id=${
                e.id
              }"><button class="btn btn-primary"><i class="fas fa-wrench"></i></button></a>

                <button onclick="handleDeleteUser(${
                  e.id
                })" class="btn btn-danger user-item-${e.id}"><i class="far fa-trash-alt"></i></button>
              </td>
            </tr>
         
       
        `;
      });

      users.innerHTML = html;
    });
}
function addUser() {
  let name = document.querySelector('input[name="name"]').value.trim();
  let account = document.querySelector('input[name="account"]').value.trim();
  let address = document.querySelector('input[name="address"]').value.trim();
  let phone = document.querySelector('input[name="phone"]').value.trim();
  let password = document.querySelector('input[name="password"]').value.trim();
  let email = document.querySelector('input[name="email"]').value.trim();
  let inputState = document.querySelector("#inputState").value.trim();

  let data = {
    name: name,
    address: address,
    account: account,
    password: password,
    typeof: inputState,
    email: email,
    number_phone: phone,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(ApiUsers, options)
    .then((rp) => rp.json())
    .then((data) => {
      if (data) {
        alert("thêm thành công");
      } else {
        alert("Noooooo! Something error");
      }
    })
    .catch(function (error) {
      console.log("Noooooo! Something error:");
      // Network Error!
      console.log(error);
    });
}

function handleDeleteUser(id) {
  const question = confirm("Do you want to delete?");
  if (question == false) return;
  console.log(id);
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(ApiUsers + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then((data) => {
      if (!data) {
        alert("Xóa thành công");
      } else {
        alert("Lỗi!");
      }
    });
}

function handleRenderUser() {
  let params = new URLSearchParams(location.search);
  let id = params.get("id");
  fetch(ApiUsers + "/" + id)
    .then((res) => res.json())
    .then((detailUser) => {
      document.querySelector('input[name="name"]').value = detailUser.name;
      document.querySelector('input[name="account"]').value =
        detailUser.account;
      document.querySelector('input[name="address"]').value =
        detailUser.address;
      document.querySelector('input[name="password"]').value =
        detailUser.password;
      document.querySelector('input[name="email"]').value = detailUser.email;
      document.querySelector('input[name="phone"]').value =
        detailUser.number_phone;
      document.querySelector("#inputState").value = detailUser.typeof;
    });
}

function updateUser() {
  let params = new URLSearchParams(location.search);
  let id = params.get("id");
  let name = document.querySelector('input[name="name"]').value.trim();
  let account = document.querySelector('input[name="account"]').value.trim();
  let address = document.querySelector('input[name="address"]').value.trim();
  let phone = document.querySelector('input[name="phone"]').value.trim();
  let password = document.querySelector('input[name="password"]').value.trim();
  let email = document.querySelector('input[name="email"]').value.trim();
  let inputState = document.querySelector("#inputState").value.trim();

  let data = {
    name: name,
    address: address,
    account: account,
    password: password,
    typeof: inputState,
    email: email,
    number_phone: phone,
  };
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(ApiUsers + "/" + id, options)
    .then((rp) => rp.json())
    .then((data) => {
      if (data) {
        alert("Update Success");
      } else {
        alert("Noooooo! Something error");
      }
    })
    .catch(function (error) {
      console.log("Noooooo! Something error:");
      // Network Error!
      console.log(error);
    });
}

const isLog = localStorage.getItem("isLogin");
const typeofa = localStorage.getItem("typeof");

if (isLog !== "true") {
  if (typeofa !== 1) {
    window.open("/asm/index.html", "_self");
  }
}
