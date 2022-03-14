let render_card = document.querySelector(".render_card");
function renderCard() {
  render_card.innerHTML = `
  <div
  class="cartfixed hidden-xs hidden-sm"
  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
>
  <span class="countProduct"></span>
  <img
    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_gio_hang.svg"
  />

  <div class="card panel-collapse collapse"  id="collapseOne" data-parent="#accordion">
    <span class="caret"></span>
    <ul class="list-group">
      <li class="list-group-item title">
        GIỎ HÀNG (<span class="countProduct">8</span>)
      </li>
      <li class="list-group-item divider"></li>
      <li class="list-group-item items product-card">
        
      </li>
      <li class="list-group-item divider"></li>
      <li class="list-group-item total">
        <span class="tleft">Tổng cộng:</span> 
        <span class="tright"></span>
      </li>

      <li class="list-group-item butn">
        <a href="/asm/views/site/page-cart.html" class="btn btn-checkout mini-cart-checkout"
        onclick="checkLogin()"  >THANH TOÁN</a
        >
      </li>
    </ul>
  </div>
</div>

<div class="social hidden-xs hidden-sm">
  <a href="https://www.facebook.com/Ananas.vietnam/"
    ><img
      src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_facebook_2.svg"
  /></a>
  <a href="https://www.instagram.com/ananasvn/"
    ><img
      src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_instagram_2.svg"
  /></a>
  <a href="https://www.youtube.com/discoveryou"
    ><img
      src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_youtube_2.svg"
  /></a>
</div>

  `;
}
renderCard();
let params = new URLSearchParams(location.search);
let id = params.get("id");

function clickCard() {
  let item;
  let name1 = document.querySelector(".prd-detail-right h4").innerText;
  let price = document.querySelector(".saleprice").innerText;
  let btn_number = document.querySelector(".btn-number").value;
  let btn_size = document.querySelector(".btn-size").value;
  let ar = localStorage.getItem("product-detail")
    ? JSON.parse(localStorage.getItem("product-detail"))
    : [];
  for (let i = 0; i < ar.length; i++) {
    if (ar[i].id == id) {
      item = ar[i];
    }
  }
  price = price.split(".");
  price = price.join("");
  price = price.split(" ");
  let newPrice = price.shift();

  let objProduct = {
    id: id,
    name: name1,
    price: Number(newPrice),
    btn_number: Number(btn_number),
    url_imgL:
      "https://res.cloudinary.com/anummio/image/upload/v1644926012/product-details/product" +
      id +
      "-1.jpg",
    btn_size: btn_size,
  };
  if (item != null) {
    item.btn_number += Number(btn_number);
  } else {
    ar.push(objProduct);
  }
  localStorage.setItem("product-detail", JSON.stringify(ar));
  totalMoney();
}

function checkLogin() {
  if (isLog != "true") {
    window.open("/asm/views/site/login.html", "_self");
  }
}

function checkCart() {
  if (isLog != "true") {
    window.open("/asm/views/site/login.html", "_self");
  }
  window.open("./confirm-cart.html");
}

function totalMoney() {
  let total = 0;
  let quantily = 0;
  let items = JSON.parse(localStorage.getItem("product-detail"));
  if (items != null) {
    items.forEach((item) => {
      total += item.btn_number * item.price;
      quantily += item.btn_number;
    });
    localStorage.setItem("quantily", quantily);
    localStorage.setItem("total", total);
  }
}

function renderCardItems() {
  let product_card = JSON.parse(localStorage.getItem("product-detail"));
  let total_card = localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0;
  let renderTotal = document.querySelector(".tright");
  let renderitem = document.querySelector(".product-card");
  let count = localStorage.getItem("quantily")
    ? JSON.parse(localStorage.getItem("quantily"))
    : 0;
  let countProduct = document.querySelector(".countProduct");
  let header_count = document.querySelector(".header-count");
  console.log();
  product_card.map((item) => {
    renderitem.innerHTML += `
    <div class="media">
    <div class="media-left">
      <a href="#"
        ><img
          class="media-object"
          src="${item.url_imgL}"
          data-holder-rendered="true"
      /></a>
    </div>

    <div class="media-body">
      <h4 class="media-heading">
        Vintas The New Military - High Top -Capulet Olive
      </h4>
      <h5>
        <span class="price">${parseInt(item.price).toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })}</span>
      </h5>
      <div style="display: none">
        <span class="productId" hidden="hidden"></span
        ><span class="value">26314</span>
      </div>
      <h5>
        <span class="size">Size:</span><span class="value">35</span>
      </h5>
      <h5>
        <span class="quantity">Số lượng:  </span
        ><span class="value">${item.btn_number}</span>
      </h5>
    </div>
  </div>

  <div class="divider"></div>
  `;
  });

  renderTotal.innerHTML = `
    ${total_card.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}
  `;
  countProduct.innerHTML = `
    ${count}
  `;
  header_count.innerHTML = `
    (${count})
  `;
}
let renderCarts = document.querySelector(".product-info .item-2");
let cart_right = document.querySelector(".main-cart-right");

function renderCart() {
  let product_cart = JSON.parse(localStorage.getItem("product-detail"));
  let total_cart = JSON.parse(localStorage.getItem("total"));
  product_cart.map((db) => {
    renderCarts.innerHTML += `
  <div class="media">
                <div class="media-left">
                  <a href="https://ananas.vn/product-detail/av00124/"
                    ><img
                      class="media-object"
                      src="${db.url_imgL}"
                      height="283"
                      width="283"
                      data-holder-rendered="true"
                  /></a>
                </div>
                <div class="media-body">
                  <a href="https://ananas.vn/product-detail/av00124/"
                    ><h4 class="media-heading">
                      ${db.name}
                    </h4>
                  </a>
                  <h5 class="price">
                    <span class="saleoff"
                      ><strong>Giá:</strong>${db.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}</span
                    >
                  </h5>

                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <h5>Size</h5>
                      <input value="${
                        db.btn_size
                      }" type="number" class="btn-size-cart" />
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <h5>Số lượng</h5>
                      <input value="${
                        db.btn_number
                      }" type="number" class="btn-size-cart" />
                    </div>
                  </div>
                </div>
                <div class="media-count">
                  <div class="price">${parseInt(
                    db.price * db.btn_number
                  ).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}</div>
                  <div class="status">CÒN HÀNG</div>
                  <div class="btn remove-product-in-cart">
                    <button class="btn-delete" onclick="deleteProductCart(${
                      db.id
                    })">
                      <img src="../../assets/img/Trash_bin.svg" />
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 item-divider"></div>
  `;
  });

  cart_right.innerHTML = `
  <ul class="list-group">
  <li class="list-group-item title">ĐƠN HÀNG</li>
  <li class="list-group-item divider"></li>
  <li class="list-group-item title-1">NHẬP MÃ KHUYẾN MÃI</li>
  <li class="list-group-item">
    <div class="input-groups">
      <input type="text" class="form-control text-uppercase" value="" />
      <span class="input-group-btn">
        <button class="btn btn-apply" type="button">ÁP DỤNG</button>
      </span>
    </div>
  </li>
  <li class="list-group-item divider-1"></li>
  <li class="list-group-item text-1">
    <span class="title-3">Đơn hàng</span>
    <span class="title-3-1 totalPriceOfCart">${total_cart.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}</span>
  </li>
  <li class="list-group-item text-2">
    <span class="title-3">Giảm</span>
    <span class="title-4-1 totalDiscountOfCart">0 VND</span>
  </li>
  <li class="list-group-item divider-1"></li>
  <li class="list-group-item">
    <span class="title-5">TẠM TÍNH</span>
    <span class="title-5-1 tempPrice">${total_cart.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}</span>
  </li>
  <li class="list-group-item">
  <button
      data-href="https://ananas.vn/shipping-infomation/"
      class="btn btn-cart to-checkout"
      onclick="checkCart()"
    >
     TIẾP TỤC THANH TOÁN
    </button>
  </li>
</ul>
  `;
}

function deleteProductCart(id) {
  let product_cart = JSON.parse(localStorage.getItem("product-detail"));
  for (var i = 0; i < product_cart.length; i++) {
    if (product_cart[i].id == id) {
      product_cart.splice(i, 1);
    }
  }
  localStorage.setItem("product-detail", JSON.stringify(product_cart));
  window.open("/asm/views/site/page-cart.html", "_self");
  totalMoney();
}
renderCardItems();

function deleteProductCartFull() {
  localStorage.setItem("total", 0);
  localStorage.setItem("product-detail", JSON.stringify([]));
  localStorage.setItem("quantily", 0);
  totalMoney();
}
