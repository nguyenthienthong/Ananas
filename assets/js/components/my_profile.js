let userInfo = document.querySelector(".user");
let id = localStorage.getItem("id");
let password = localStorage.getItem("password");

fetch(ApiUsers + "/" + id)
  .then((res) => {
    return res.json();
  })
  .then((db) => {
    console.log(db);
    userInfo.innerHTML = `
       <h4>01. Profile details</h4>
       <div class="row">
       <div class="col-md-6 form-it">
         <label>Full Name</label>
         <input type="text" class="fullname" placeholder="edwardkennedy" value=${JSON.stringify(
           db.name
         )}>
       </div>
       <div class="col-md-6 form-it">
         <label>Email Address</label>
         <input type="text" class="email" placeholder="edward@kennedy.com" value=${JSON.stringify(
           db.email
         )}>
       </div>
       </div>
       <div class="row">
       <div class="col-md-6 form-it">
         <label>Username</label>
         <input type="text" class="username" placeholder="Edward "  value=${JSON.stringify(
           db.account
         )}>
       </div>
       <div class="col-md-6 form-it">
         <label>Password</label>
         <input type="password" class="password" placeholder="Kennedy" value=${JSON.stringify(
           db.password
         )}>
       </div>
       </div>
       <div class="row">
       <div class="col-md-6 form-it">
         <label>Country</label>
         <input type="text" class="address" value=${JSON.stringify(db.address)}>
       </div>
       <div class="col-md-6 form-it">
         <label>Phone number</label>
         <input type="text" class="phone-number" value=${JSON.stringify(
           db.number_phone
         )} disabled />
       </div>
       </div>
       <div class="row">
       <div class="col-md-2">
         <input class="submit" type="submit" value="save" onclick="saveInfo()" />
       </div>
       </div>
 `;
  });

function saveInfo() {
  let name = document.querySelector(".fullname").value;
  let address = document.querySelector(".address").value;
  let account = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone-number").value;
  let typeofs = localStorage.getItem("typeof");

  localStorage.setItem("username", JSON.stringify(name));
  localStorage.setItem("account", JSON.stringify(account));
  localStorage.setItem("address", JSON.stringify(address));
  localStorage.setItem("email", JSON.stringify(email));
  let data = {
    name: name,
    address: address,
    account: account,
    password: password,
    email: email,
    number_phone: phone,
    typeof: typeofs,
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

function handelChangePassword() {
  let oldPass = document.querySelector(".oldPass").value;
  let newPass = document.querySelector(".newPass").value;
  let confirmNewPass = document.querySelector(".confirmNewPass").value;
  // Info user
  let name = document.querySelector(".fullname").value;
  let address = document.querySelector(".address").value;
  let account = document.querySelector(".username").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone-number").value;
  let typeofs = localStorage.getItem("typeof");
  if (oldPass === password) {
    if (newPass == confirmNewPass) {
      localStorage.setItem("password", JSON.stringify(newPass));
      let data = {
        name: name,
        address: address,
        account: account,
        email: email,
        number_phone: phone,
        typeof: typeofs,
        password: newPass,
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
    } else {
      console.log("the new password and the old password are incorrect");
    }
  } else {
    console.log("Old passwork error");
  }
}
