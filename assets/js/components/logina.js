let log = document.getElementById("login");
const isLog = localStorage.getItem("isLogin");
let a = document.querySelector("#login");
let header__user = document.querySelector(".header__user");
const typeofa = localStorage.getItem("typeof");
if (isLog == "true") {
  if (typeofa == 0) {
    a.style.display = "none";
    header__user.innerHTML = `
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  type="button" data-toggle="dropdown" role="button"
                  >
                  <img src="https://res.cloudinary.com/anummio/image/upload/v1644940414/1_k9iooe.jpg" alt=""/>
                </a>
                <ul class="dropdown-menu tran" x-placement="bottom-end">
                  <li><a class="dropdown-item" href="">Home</a></li>
                  <li><a class="dropdown-item" href="/asm/views/site/my_profile.html">My profile</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="" onclick="getOut()">Get out</a></li>
                </ul>
              </li>
  `;
  } else if (typeofa == 1) {
    a.style.display = "none";
    header__user.innerHTML = `
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  type="button" data-toggle="dropdown" role="button"
                  >
                  <img src="https://res.cloudinary.com/anummio/image/upload/v1644940414/1_k9iooe.jpg" alt=""/>
                </a>
                <ul class="dropdown-menu tran" x-placement="bottom-end">
                  <li><a class="dropdown-item" href="">Home</a></li>
                  <li><a class="dropdown-item" href="/asm/views/site/my_profile.html">My profile</a></li>
                  <li><a class="dropdown-item" href="/asm/views/admin/index.html">Admin</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="" onclick="getOut()">Get out</a></li>
                </ul>
              </li>
  `;
  }
}

function getOut() {
  localStorage.removeItem("isLogin");
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  localStorage.removeItem("typeof");
  localStorage.removeItem("email");
  localStorage.removeItem("phone");
  localStorage.removeItem("id");
  localStorage.removeItem("account");
  localStorage.removeItem("address");
}
