const ApiCategory = "http://localhost:3000/category";
let product_line = document.querySelector(".product_line");
function line() {
  fetch(ApiCategory)
    .then((res) => {
      return res.json();
    })
    .then((db) => {
      db.map((item) => {
        product_line.innerHTML += `
        <ul>
        <a href="?id=${item.id}"><li class="accordion-body" >${item.name}</li></a>
      </ul>
      `;
      });
    });
}
function renderCategory(id) {
  const ApiProducts = "http://localhost:3000/products";
  fetch(ApiProducts + "/" + id)
    .then((res) => {
      return res.json();
    })
    .then((db) => {
      db.map((item) => {});
    });
}

let product_items = document.querySelector(".list-products");
function renderCategory() {
  const ApiProducts = "http://localhost:3000/products";
  let params = new URLSearchParams(location.search);
  let id = params.get("id");
  fetch(ApiProducts + "?id_category=" + id)
    .then((res) => {
      return res.json();
    })
    .then((db) => {
      db.map((e) => {
        product_items.innerHTML += `
      <div class="list-product-item">
      <a href="./page-products_details.html?id=${e.id}">
        <div class="cont-item">
        <img
          class="inormal"
          src="${e.url_img}-1.jpg"
        />
        <img
          class="ihover"
          src="${e.url_img}-2.jpg"
        />
      </div>
      </a>

      <div class="button">
        <img
          src="../../assets/img/Heart_product_1.svg"
          class="button-icon"
        />
        <button class="btn-1 buy"><a href="./page-products_details.html?id=${e.id}"" >MUA NGAY</a></button>
      </div>

      <div class="caption">
        <h3 class="type" >New Arrival</h3>
        <h3 class="divider"></h3>
        <a  href="./page-products_details.html?id=${e.id}"><h3 class="name">${e.name}</h3></a>
        <h3 class="color">${e.color}</h3>
        <h3 class="price">${e.price} VNĐ</h3>
      </div>
    </div>
      `;
      });
    });
}

renderCategory();
