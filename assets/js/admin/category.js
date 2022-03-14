// Make a request for a user with a given ID
let params = new URLSearchParams(location.search);
let id = params.get("id");
const category = document.getElementById("category");
function renderCategory() {
  fetch(ApiCategory)
    .then(function (reponsive) {
      return reponsive.json();
    })
    .then(function (points) {
      let html = points.map(function (e) {
        return `
            <tr>
              <th scope="row">${e.id}</th>
              <td>${e.name}</td>
              <td>
              <a href="./updateCategory.html?id=${e.id}"><button class="btn btn-primary"><i class="fas fa-wrench"></i></button></a>
              <button onclick="handleDeleteCategory(${e.id})" class="btn btn-danger category-item-${e.id}"><i class="far fa-trash-alt"></i></button>
            </td>
            </tr>
        `;
      });
      category.innerHTML = html;
    });
}

function addCategory() {
  let inputCategory = document.querySelector(
    'input[name="inputCategory"]'
  ).value;

  let data = {
    name: inputCategory,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(ApiCategory, options)
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

function handleDeleteCategory(id) {
  const question = confirm("Do you want to delete?");
  if (question == false) return;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(ApiCategory + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then((data) => {
      if (!data) {
        alert("Delete Success");
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

function handleRenderCategory() {
  fetch(ApiCategory + "/" + id)
    .then((res) => res.json())
    .then((detailCategory) => {
      document.querySelector('input[name="inputCategory"]').value =
        detailCategory.name;
    });
}

function updateCategory() {
  let inputCategory = document.querySelector(
    'input[name="inputCategory"]'
  ).value;

  let data = {
    name: inputCategory,
  };
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(ApiCategory + "/" + id, options)
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
