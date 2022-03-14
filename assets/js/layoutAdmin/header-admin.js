let header = document.querySelector(".header");
header.innerHTML = `
    <div class="header-website">
      <div class="header__nav">
        <a href="/asm/index.html"><img src="../../assets/img/Logo_Ananas_Header.png" alt="" /></a>
        <a href="/asm/index.html"><h3>Ananas</h3></a>
      </div>
      <div class="header__collapse">
        <ul class="header__search">
          <li class="nav-item">
            <a href="#"><i class="fas fa-search"></i></a>
          </li>
        </ul>

        <ul class="header__user">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              ><img src="../../assets/img/1.jpg" alt=""
            /></a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="">Home</a></li>
              <li><a class="dropdown-item" href="">My profile</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="">Get out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  `;
