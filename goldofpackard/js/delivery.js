var delivery_section = document.getElementById("delivery_section");
var delivery_block = document.getElementById("delivery_block");
var menu_delivery = document.getElementById("menu_delivery");
var del_block = document.getElementsByClassName("delivery_block_sect");
var del_basket = document.getElementById("del_basket");

menu_delivery.onclick = (e) => {
  for (let item of menu_delivery.childNodes) {
    item.className = "";
  }
  event.target.className = "menu_delivery_a_js";
  for (let i = 0; i < del_block.length; i++) {
    //del_block[i].style.transform = "scaleY(0)";
  }
  var p = e.target.parentElement;
  var index = Array.prototype.indexOf.call(p.children, e.target);
  if (e.target !== menu_delivery) {
    //del_block[index].style.transform = "scaleY(1)";
    //delivery_block.style.height = delivery_block.childNodes[0].offsetHeight;
  }
};

// Basket
del_block[0].onclick = (e) => {
  del_basket.style.display = "flex";
  if (~e.target.className.indexOf("delivery_block_sect_item")) {
    e.target.style.background = "#e8e8e8";
  }
};
