// Make a request for a user with a given ID
const products = document.getElementById("products");
function renderProduct() {
  fetch(ApiProducts)
    .then(function (reponsive) {
      return reponsive.json();
    })
    .then(function (points) {
      let html = points.map(function (e) {
        return `
        
            <tr>
              <th scope="row">${e.id}</th>
              <td>${e.name}</td>
              <td>${e.color}</td>
              <td>${e.price} VNĐ</td>
              <td>${e.status}</td>
              <td>
              <a href="./detailProduct.html?id=${e.id}">
                <button class="btn btn-success">
                <i class="fas fa-eye"></i>
                </button
              </a>
              <a href="./updateProduct.html?id=${e.id}"><button class="btn btn-primary"><i class="fas fa-wrench"></i></button></a>
              <button onclick="handleDeleteProduct(${e.id})" class="btn btn-danger product-item-${e.id}"><i class="far fa-trash-alt"></i></button>
            </td>
            </tr>
        `;
      });
      products.innerHTML = html;
    });
}

function addProduct() {
  let name = document.querySelector('input[name="name"]').value.trim();
  let color = document.querySelector('input[name="color"]').value.trim();
  let price = document.querySelector('input[name="price"]').value.trim();
  let status = document.querySelector('input[name="status"]').value.trim();
  let content = document.querySelector("#content").value.trim();
  let category = document.querySelector("#category").value.trim();

  let data = {
    name: name,
    color: color,
    price: price,
    status: status,
    content: content,
    id_category: category,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(ApiProducts, options)
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

function handleDeleteProduct(id) {
  const question = confirm("Do you want to delete?");
  if (question == false) return;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(ApiProducts + "/" + id, options)
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

function handleRenderProduct() {
  let params = new URLSearchParams(location.search);
  let id = params.get("id");
  fetch(ApiProducts + "/" + id)
    .then((res) => res.json())
    .then((detailProduct) => {
      document.querySelector('input[name="name"]').value = detailProduct.name;
      document.querySelector('input[name="color"]').value = detailProduct.color;
      document.querySelector('input[name="price"]').value = detailProduct.price;
      document.querySelector('input[name="status"]').value =
        detailProduct.status;
      document.querySelector("#content").value = detailProduct.content;
      document.querySelector("#category").value = detailProduct.id_category;
    });
}

function updateProduct() {
  let params = new URLSearchParams(location.search);
  let id = params.get("id");
  let name = document.querySelector('input[name="name"]').value.trim();
  let color = document.querySelector('input[name="color"]').value.trim();
  let price = document.querySelector('input[name="price"]').value.trim();
  let status = document.querySelector('input[name="status"]').value.trim();
  let content = document.querySelector("#content").value.trim();
  let category = document.querySelector("#category").value.trim();

  let data = {
    name: name,
    color: color,
    price: price,
    status: status,
    content: content,
    id_category: category,
  };
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(ApiProducts + "/" + id, options)
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

function handelRenderDetail() {
  let detail = document.querySelector(".render-detail");
  let params = new URLSearchParams(location.search);
  let id = params.get("id");
  fetch(ApiProducts + "/" + id)
    .then((res) => res.json())
    .then((detailProduct) => {
      console.log(detailProduct);
      let html = `
    <div class="d-flex table-responsive">
    <div class="left-detail">
      <img
        src="${detailProduct.url_img}"
        alt=""
      />
    </div>
    <div class="right-detail">
      <h2>Track 6 Class E - Low Top</h2>
      <h2 class="detail d-flex justify-content-between">
        <span>Mã sản phẩm: <strong>SVG ${detailProduct.id}</strong></span>
        <span>Tình trạng: <strong>New Arrival</strong></span>
      </h2>
      <div class="detail">
        <h2 class="detail-price">${detailProduct.price} VNĐ</h2>
      </div>
      <div class="divider"></div>
      <div class="detail">
        <span>
          ${detailProduct.content}
        </span>
      </div>
      <div class="divider"></div>
    </div>
  </div>
    `;
      detail.innerHTML = html;
    });
}
