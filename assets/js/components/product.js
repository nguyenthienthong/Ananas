const ApiProducts = "http://localhost:3000/products";
let product_item = document.querySelector(".list-products");
function renderProduct() {
  fetch(ApiProducts)
    .then((res) => {
      return res.json();
    })
    .then((db) => {
      db.map((e) => {
        product_item.innerHTML += `
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
let renderDetail = document.querySelector(".render_product");
function renderProductDetail() {
  let params = new URLSearchParams(location.search);
  let id = params.get("id");
  fetch(ApiProducts + "/" + id)
    .then((res) => {
      return res.json();
    })
    .then((db) => {
      renderDetail.innerHTML = `
    <div class="product-detail marg"> 
    <div class="header-detail">
      <ol class="header-detail-ol">
        <li class="header-detail_name left separate">Giày</li>
        <li class="header-detail_name separate">Basas</li>
        <li class="header-detail_name active">
          ${db.name}
        </li>
      </ol>
    </div>
  </div>

  <div class="details-left">
    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
      <div class="wrapper-slide">
        <div class="prd-detail-main-img">
          <img
            src="${db.url_img}-1.jpg"
            alt=""
          />
          <img
            src="${db.url_img}-2.jpg"
            alt=""
          />
          <img
            src="${db.url_img}-3.jpg"
            alt=""
          />
          <img
            src="${db.url_img}-4.jpg"
            alt=""
          />
          <img
            src="${db.url_img}-5.jpg"
            alt=""
          />
          <img
            src="${db.url_img}-6.jpg"
            alt=""
          />
        </div>

        <div class="prd-detail-slide">
          <img
            src="${db.url_img}-1.jpg"
            alt=""
          />

          <img
            src="${db.url_img}-2.jpg"
            alt=""
          />
          <img
            src="${db.url_img}-3.jpg"
            alt=""
          />
          <img
            src="${db.url_img}-4.jpg"
            alt=""
          />
          <img
            src="${db.url_img}-5.jpg"
            alt=""
          />
          <img
            src="${db.url_img}-6.jpg"
            alt=""
          />
        </div>
      </div>

      .
    </div>

    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 prd-detail-right">
      <h4>${db.name} - ${db.color}</h4>
      <h6 class="detail1">
        <input type="hidden" id="productId" value="463672" />
        <span class="pull-left pull"
          >Mã sản phẩm: <strong>AV000${db.id}</strong></span
        >
        <span class="pull-right pull"
          >Tình trạng: <strong>${db.status}</strong></span
        >
      </h6>

      <h5 class="detail1">
        <span class="saleprice">${db.price} VND</span>
      </h5>

      <div class="divider"></div>

      <h6 class="detail1">
        ${db.content}
      </h6>

      <div class="divider"></div>

      <div class="color">
        <ul class="nav tree">
          <li class="cb-color-fixed">
            <label data-link=""
              ><span
                class="bg-color"
                style="background-color: #2d2c2f"
              ></span
              ><input name="cbColor" type="checkbox" value="0" hidden=""
            /></label>
            <label data-link="#"
              ><span
                class="bg-color"
                style="background-color: #2d2c2f"
              ></span
              ><input name="cbColor" type="checkbox" value="0" hidden="" />
            </label>
          </li>
        </ul>
      </div>

      <div class="divider"></div>

      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <h5>SIZE</h5>
          <div class="size">
            <input class="btn btn-size" type="number" value="35">
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6">
          <h5>SỐ LƯỢNG</h5>
          <div class="size">
            <input class="btn btn-size btn-number" type="number" value="1">
          </div>
          
        </div>
      </div>

      <div class="row grp-btn1">
        <a href="" class="btn btn-add_card" onclick="clickCard()">THÊM VÀO GIỎ HÀNG</a>
        <a href="#" class="btn btn-like"
          ><img src="../../assets/img/Heart_product_1.svg" alt=""
        /></a>
      </div>
      <div class="row">
        <a
          data-url-cart="https://ananas.vn/your-cart"
          id="pickOrder"
          data-ananas-validations=""
          class="btn btn-checkout payment"
          >THANH TOÁN</a
        >
      </div>
      <div class="row info-validate empty-error" >
        Vui lòng chọn Size/Số lượng phù hợp
      </div>

      <div>
        <div class="panel-group">
          <div class="panel-default">
            <button class="accordion ">
              THÔNG TIN SẢN PHẨM
              <span class="icon-row down">
                <i class="down fas fa-angle-down"></i>
              </span>

              <span class="icon-row up"
                ><i class="up fas fa-angle-up"></i
              ></span>
            </button>

            <div class="panel">
              <div class="divider"></div>

              <div class="panel-body">
                <p>
                  Gender: Unisex
                  <br />
                  Size run: 35 - 46
                  <br />
                  Upper: Canvas/Suede
                  <br />
                  Outsole: Rubber
                </p>

                <p>
                  <img
                    src="../../assets/img/Size-chart-1-e1559209680920.jpg"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
          <div class="divider"></div>

          <div class="panel-default">
            <button class="accordion">
              QUY ĐỊNH ĐỔI SẢN PHẨM
              <span class="icon-row down">
                <i class="down fas fa-angle-down"></i>
              </span>

              <span class="icon-row up"
                ><i class="up fas fa-angle-up"></i
              ></span>
            </button>

            <div class="panel">
              <div class="divider"></div>

              <div class="panel-body">
                <P>
                  <ul>
                    <li>
                      Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ
                      trước khi quyết định.
                    </li>
                    <li>
                      Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng
                      là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua
                      online là 14 ngày, kể từ ngày nhận hàng.
                    </li>
                    <li>
                      Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn
                      nguyên tem, hộp, nhãn mác.
                    </li>
                    <li>
                      Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không
                      giặt tẩy, bám bẩn, biến dạng.
                    </li>
                    <li>
                      Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp
                      sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản
                      phẩm khác:<br />
                      - Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị
                      cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm
                      đổi (nếu có).<br />
                      - Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn,
                      chúng tôi sẽ không hoàn lại tiền.
                    </li>
                    <li>
                      Trong trường hợp sản phẩm - size bạn muốn đổi không
                      còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.
                    </li>
                    <li>
                      Không hoàn trả bằng tiền mặt dù bất cứ trong trường
                      hợp nào. Mong bạn thông cảm.
                    </li>
                  </ul>
                </P>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="panel-default">
            <button class="accordion">
              BẢO HÀNG THẾ NÀO?
              <span class="icon-row down">
                <i class="down fas fa-angle-down"></i>
              </span>

              <span class="icon-row up"
                ><i class="up fas fa-angle-up"></i
              ></span>
            </button>

            <div class="panel">
              <div class="divider"></div>

              <div class="panel-body">
                <P>
                  <ul>
                    <li>Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều 
                      khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: 
                      gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, 
                      mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục 
                      vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, 
                      hoặc gửi đến trung tâm bảo hành Ananas ngay
                      trong trung tâm TP.HCM trong giờ hành chính:
                    </li>
                    <li>170-172, Đinh Bộ Lĩnh, P.26 , Q.Bình Thạnh, TP.HCM<br>
                      Hotline: 028 2211 0067
                    </li>
                  </ul>
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
    </div>
  </div>
    
      `;
    })
    .then(() => {
      $(".prd-detail-main-img").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".prd-detail-slide",
      });
      $(".prd-detail-slide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".prd-detail-main-img",
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow:
          '<button class="slide-arrow_seller prev-arrow_seller"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow_seller next-arrow_seller"><i class="fas fa-chevron-right"></i></button>',
      });

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    });
}
