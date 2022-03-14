const ApiUsers = "http://localhost:3000/users";
const ApiProducts = "http://localhost:3000/products";
const ApiCategory = "http://localhost:3000/category";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".sidebar-item");
const panes = $$(".table");
const heading = $$(".page-title");
const home = $$(".home");
const menu_icon = $$(".menu-icon");
const menu_hd = $$(".menu-hd");
const btn_main = $$(".btn_main");

tabs.forEach((tab, index) => {
  const pane = panes[index];
  const headings = heading[index];
  const homes = home[index];
  const menu_icons = menu_icon[index];
  const menu_hds = menu_hd[index];
  const btn_mains = btn_main[index];

  tab.onclick = function () {
    $(".sidebar-item.active").classList.remove("active");
    $(".table.active").classList.remove("active");
    $(".page-title.active").classList.remove("active");
    $(".home.active").classList.remove("active");
    $(".menu-icon.active").classList.remove("active");
    $(".menu-hd.active").classList.remove("active");
    $(".btn_main.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
    headings.classList.add("active");
    homes.classList.add("active");
    menu_icons.classList.add("active");
    menu_hds.classList.add("active");
    btn_mains.classList.add("active");
  };
});
