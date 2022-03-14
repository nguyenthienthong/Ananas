let header = document.querySelector(".header");
header.innerHTML = `


<div class="header-menu">
        <ul class="header-menu_ul">
          <a href="">
            <li class="header-menu_ul-li">
              <img
                class="header-menu_ul-img"
                src="https://res.cloudinary.com/anummio/image/upload/v1644510320/icons/icon_tra_cuu_don_hang_pcvgxs.svg"
                alt=""
              />
              Tra đơn hàng
            </li>
          </a>
          <a href="">
            <li class="header-menu_ul-li">
              <img
                class="header-menu_ul-img"
                src="https://res.cloudinary.com/anummio/image/upload/v1644510317/icons/icon_tim_cua_hang_yuw9qe.svg"
                alt=""
              />
              Tìm cửa hàng
            </li>
          </a>
          <a href="">
            <li class="header-menu_ul-li">
              <img
                class="header-menu_ul-img"
                src="https://res.cloudinary.com/anummio/image/upload/v1644510311/icons/icon_heart_header_s2nsvq.svg"
                alt=""
              />
              Yêu thích
            </li>
          </a>
          <a id="login" href="./login.html">
            <li class="header-menu_ul-li">
              <img
                class="header-menu_ul-img"
                src="https://res.cloudinary.com/anummio/image/upload/v1644510294/icons/icon_dang_nhap_zgr0no.svg"
                alt=""
              />
              Đăng nhập
            </li>
          </a>
          <a href="/asm/views/site/page-cart.html">
            <li class="header-menu_ul-li">
              <img
                class="header-menu_ul-img"
                src="https://res.cloudinary.com/anummio/image/upload/v1644510303/icons/icon_gio_hang_b7yzaf.svg"
                alt=""
              />
              Giỏ hàng
              <span class="header-count"></span>
            </li>
          </a>

          <ul class="header__user"></ul>
        </ul>
      </div>
      <div class="header-navbar">
        <div class="header-nav_logo">
          <a href="../../index.html">
            <img
              class="header-nav_logo-img"
              src="https://res.cloudinary.com/anummio/image/upload/v1638102281/Logo_Ananas_Header_raaiyd.svg"
            />
          </a>
        </div>

        <div class="header-nav_menu">
          <ul class="menu-ul">
            <li class="menu-ul_li separate">
              <a href="./page-product.html">
                SẢN PHẨM
                <span class=""></span>
              </a>
              <div></div>
            </li>

            <li class="menu-ul_li separate">
              <a href="">
                NAM
                <span class=""></span>
              </a>
              <div></div>
            </li>

            <li class="menu-ul_li separate">
              <a href="">
                NỮ
                <span class=""></span>
              </a>
              <div></div>
            </li>

            <li class="menu-ul_li separate">
              <a href="">
                SALE OFF
                <span class=""></span>
              </a>
              <div></div>
            </li>

            <li class="menu-ul_li">
              <a href="">
                <img
                  src="https://res.cloudinary.com/anummio/image/upload/v1644510284/icons/DiscoverYOU_kqgnqi.svg"
                  alt=""
                />
              </a>
              <div></div>
            </li>
          </ul>
        </div>

        <div class="form-group">
          <img class="icon-search" src="" />
          <input
            type="text"
            name="key"
            class="form-control"
            value=""
            placeholder="Tìm kiếm"
          />
        </div>
      </div>

<div class="slick-slider sale-top">

</div>
  `;

let sale_top = document.querySelector(".sale-top");
APIseller = "http://localhost:3000/seller";
fetch(APIseller)
  .then((res) => {
    return res.json();
  })
  .then((db) => {
    db.forEach((item) => {
      $(".sale-top").append(`
      <div class="slider_item">
      <p>${item.item}</p>
    </div>
   
  
    `);
    });
  })
  .then(() => {
    $(".sale-top").slick({
      prevArrow:
        '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
    });
  });
