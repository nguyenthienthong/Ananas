let ApiUsers = "http://localhost:3000/users";
let error = document.querySelector(".error-message");
let isLog = localStorage.getItem("isLogin");

// Info register
let fullName = document.querySelector('input[name="fullname"]');
let userName = document.getElementsByName("username");
let password = document.getElementsByName("password");
let address = document.querySelector('input[name="address"]');
let phone = document.querySelector('input[name="phone"]');
let email = document.querySelector('input[name="email"]');

$(document).ready(function () {
  var panelOne = $(".form-panel.two").height(),
    panelTwo = $(".form-panel.two")[0].scrollHeight;

  $(".form-panel.two")
    .not(".form-panel.two.active")
    .on("click", function (e) {
      e.preventDefault();

      $(".form-toggle").addClass("visible");
      $(".form-panel.one").addClass("hidden");
      $(".form-panel.two").addClass("active");
      $(".form").animate(
        {
          height: panelTwo,
        },
        200
      );
    });

  $(".form-toggle").on("click", function (e) {
    e.preventDefault();
    $(this).removeClass("visible");
    $(".form-panel.one").removeClass("hidden");
    $(".form-panel.two").removeClass("active");
    $(".form").animate(
      {
        height: panelOne,
      },
      200
    );
  });
});

async function handleLogin() {
  await fetch(ApiUsers)
    .then((response) => response.json())
    .then((data) => {
      data.map(function (db) {
        console.log(db);
        if (db.account == userName[0].value) {
          if (db.password == password[0].value) {
            localStorage.setItem("isLogin", true);
            localStorage.setItem("username", db.name);
            localStorage.setItem("password", db.password);
            localStorage.setItem("typeof", db.typeof);
            localStorage.setItem("email", db.email);
            localStorage.setItem("phone", db.number_phone);
            localStorage.setItem("id", db.id);
            localStorage.setItem("address", db.address);
            localStorage.setItem("account", db.account);
            error.style.display = "none";
            window.open("../../index.html", "_self");
          } else {
            error.style.display = "block";
          }
        } else {
          error.style.display = "block";
        }
      });
    });
}

function handleRegister() {
  let data = {
    name: fullName.value,
    address: address.value,
    account: userName[1].value,
    password: password[1].value,
    email: email.value,
    number_phone: phone.value,
    typeof: 0,
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
