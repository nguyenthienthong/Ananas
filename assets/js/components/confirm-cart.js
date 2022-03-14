let name_info = document.querySelector(".name_info");
let number_info = document.querySelector(".number_info");
let email_info = document.querySelector(".email_info");
let address_info = document.querySelector(".address_info");
let renderItem = document.querySelector(".render-items-cart");
let product_detail = JSON.parse(localStorage.getItem("product-detail"));
let total_cart = localStorage.getItem("total");
let total_price = document.querySelector(".total-price");
let card_fee = document.querySelector(".card-fee");
let quantily = localStorage.getItem("quantily");
let id_user = localStorage.getItem("id");

let isNotification = document.getElementsByName('input[id="isNotification"]');
let current_price = document.querySelector(".current-price");
function renderInfo() {
  let username = localStorage.getItem("username");
  let phone = localStorage.getItem("phone");
  let address = localStorage.getItem("address");
  let email = localStorage.getItem("email");

  name_info.value = username;
  number_info.value = phone;
  email_info.value = email;
  address_info.value = address;

  product_detail.map((db) => {
    renderItem.innerHTML += `
  <li class="list-group-item text-1">
  <span class="title-6">${db.name}</span>
  <span class="title-6-1">${parseInt(db.price * db.btn_number).toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  )}</span>
</li>
<li class="list-group-item text-1-1">
  <span class="title-6-2">Size: ${db.btn_size}</span>
  <span class="title-6-3">x ${db.btn_number}</span>
</li>
  `;
  });

  total_price.innerHTML = parseInt(total_cart).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });

  card_fee.innerHTML = parseInt(total_cart).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });

  current_price.innerHTML = parseInt(total_cart).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
}
let ApiUsers = "http://localhost:3000/users";

function completeCart() {
  let id = localStorage.getItem("id");
  let data = {
    name: name_info.value,
    address: address_info.value,
    email: email_info.value,
    number_phone: number_info.value,
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
  addHistory();

  localStorage.setItem("total", 0);
  localStorage.setItem("product-detail", JSON.stringify([]));
  localStorage.setItem("quantily", 0);
  window.open("./success.html", "_self");
}
let APIhistory = "http://localhost:3000/history_buy";
function addHistory() {
  let arr = [];
  product_detail.map((db) => {
    arr.push(db.id);
  });

  let data = {
    id_product: arr,
    price: total_cart,
    quantily: quantily,
    id_user: id_user,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(APIhistory, options)
    .then((rp) => rp.json())
    .then((data) => {
      if (data) {
        alert("Đặt hàng thành công");
      } else {
        alert("Noooooo! Something error");
      }
    })
    .catch(function (error) {
      console.log("Noooooo! Something error:");
      // Network Error!
      console.log(error);
    });
  console.log(arr);
}
