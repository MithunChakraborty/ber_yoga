var delivery_section = document.getElementById("delivery_section");
var delivery_block = document.getElementById("delivery_block");
var menu_delivery = document.getElementById("menu_delivery");
var del_block = document.getElementsByClassName("delivery_block_sect");
var del_basket = document.getElementById("del_basket");
var delivery_start = document.getElementById("delivery_start");
var del_order_section = document.getElementById("del_order_section");
var basket_number_mob = document.getElementById("basket_number_mob");
var basket_number = document.getElementById("basket_number");
var basket_container = document.getElementById("basket_container");
var basket_items_sum = document.getElementById("basket_items_sum");
var basket_item_price = document.querySelectorAll(".basket_item_price");
var basket_del = document.querySelectorAll(".basket_del");
var basket_plus = document.querySelectorAll(".basket_plus");
var basket_drop = document.querySelectorAll(".basket_drop");
var basket_item = document.querySelectorAll(".basket_item");
var basket_item_name = document.querySelectorAll(".basket_item_name");
var basket_item_quantity = document.querySelectorAll(".basket_item_quantity");

var BASKET_NAMES = [[],[]];
for (let i = 0; i < 100; i++){
  BASKET_NAMES[i] = [];
}

function find_index(node) {
  // node = e.target
  let p = node.parentElement;
  return Array.prototype.indexOf.call(p.children, node);
}

function change_basket(arg, node) {
  // new node in basket
  let div = document.createElement("div");
  div.className = "basket_item";

  if (arg == 0) {
    // -
    node.style.background = "";
    node.style.color = "rgb(37, 28, 6)";
    for (let i = 0; i < BASKET_NAMES.length; i++) {
      if (BASKET_NAMES[i][0] == node.innerText) {
        let mas = BASKET_NAMES[i][0].split("\n");
        mas.splice(1, 1);
        mas.splice(2, 1);
        let price = mas[2].split(" ");
        basket_number_mob.textContent =
          Number(basket_number_mob.textContent) -
            Number(price[0]);
        basket_number.textContent =
          Number(basket_number.textContent) - 1;
        basket_items_sum.textContent =
          Number(basket_items_sum.textContent) -
            Number(price[0]);

        // remove div basket item
        let arrach = document.getElementsByClassName("basket_item");
        for (let j = 0; j < arrach.length; j++) {
          if (arrach[j].innerText.includes(mas[0])) {
            arrach[j].remove();
            break;
          }
        }

        BASKET_NAMES[i] = [];
        break;
      }
    }
  }
  else {
    // +
    node.style.background = "rgb(225, 197, 114)";
    node.style.color = "#fff";
    for (let i = 0; i < BASKET_NAMES.length; i++) {
      if (BASKET_NAMES[i].length == 0) {
        BASKET_NAMES[i][0] = node.innerText;
        let mas = BASKET_NAMES[i][0].split("\n");
        mas.splice(1, 1);
        mas.splice(2, 1);
        let price = mas[2].split(" ");
        basket_number_mob.textContent =
          Number(basket_number_mob.textContent) +
            Number(price[0]);
        basket_number.textContent =
          Number(basket_number.textContent) + 1;

        // add div basket item
        basket_container.append(div);
        div.innerHTML = `
          <a class="basket_del">
            <div class="cross"></div>
          </a>
          <p class="basket_item_name">
            ${mas[0]}
          </p>
          <a class="basket_plus">
            <div class="cross_plus"></div>
          </a>
          <p class="basket_item_quantity">1</p>
          <a class="basket_drop">
            <div class="cross_plus"></div>
          </a>
          <p>
            <span class="basket_item_price">
              ${price[0]}
            </span> &ensp;руб
          </p>
        `;

        // add quantity default (1)
        BASKET_NAMES[i][1] = 1;

        // add item price to sum basket
        basket_items_sum.textContent =
          Number(basket_items_sum.textContent) +
            Number(price[0]);

        //basket_item_price
        break;
      }
    }
  }
}

// click on menu category
menu_delivery.onclick = (e) => {
  for (let item of menu_delivery.childNodes) {
    item.className = "";
  }
  event.target.className = "menu_delivery_a_js";
  //if (e.target !== menu_delivery) {
    //del_block[index].style.transform = "scaleY(1)";
    //delivery_block.style.height = delivery_block.childNodes[0].offsetHeight;
  //}
  // AJAX БУДЕТ СДЕСь

};

// click on menu items
del_block[0].onclick = (e) => {
  del_basket.style.display = "flex";

  // color clicked menu items
  let elem = e.target;
  if (~elem.className.indexOf("delivery_block_sect_item")) {
    if (elem.style.background == "rgb(225, 197, 114)") {
      // -
      change_basket(0, elem);
    }
    else {
      // +
      change_basket(1, elem);
    }
  }
  else {
    while (true) {
      elem = elem.parentElement;
      if (elem.className == "delivery_block_sect_item") {
        if (elem.style.background == "rgb(225, 197, 114)") {
          // -
          change_basket(0, elem);
        }
        else {
          // +
          change_basket(1, elem);
        }
        return;
      }
    }
  }
};

// open delivery_window
delivery_window_btn = [del_basket, delivery_start];
for (let item of delivery_window_btn) {
  item.onclick = (e) => {
    // if basket is null
    let basj = document.getElementsByClassName("basket_item");
    if (basj[0] == undefined)
      return;

    let windowScroll =
      document.body.scrollTop ||
      document.documentElement.scrollTop;
    del_order_section.style.transform = "scaleY(1)";
    del_order_section.style.height = `${document.body.offsetHeight}px`;
    del_order_section.childNodes[1].style.marginTop = `${windowScroll + 20}px`;

    // del basket item in window
    basket_del = document.querySelectorAll(".basket_del");
    basket_item_name = document.querySelectorAll(".basket_item_name");
    basket_item = document.querySelectorAll(".basket_item");
    basket_plus = document.querySelectorAll(".basket_plus");
    basket_drop = document.querySelectorAll(".basket_drop");
    basket_item_quantity = document.querySelectorAll(".basket_item_quantity");
    basket_item_price = document.querySelectorAll(".basket_item_price");
    for (let item2 of basket_del) {
      item2.onclick = (e) => {
        let parent = e.target.parentElement.parentElement;
        let del_index = find_index(parent);
        if (basket_item.length == 1)
          return;
        for (let i = 0; i < BASKET_NAMES.length; i++) {
          if (BASKET_NAMES[i].length == 0)
            continue;
          if (BASKET_NAMES[i][0].includes(basket_item_name[del_index].innerText)) {
            let mas = BASKET_NAMES[i][0].split("\n");
            mas.splice(1, 1);
            mas.splice(2, 1);
            let price = mas[2].split(" ");
            basket_number_mob.textContent =
              Number(basket_number_mob.textContent) -
                Number(price[0]);
            basket_number.textContent =
              Number(basket_number.textContent) - 1;
            basket_items_sum.textContent =
              Number(basket_items_sum.textContent) -
                Number(basket_item_price[del_index].innerText);

            // remove div basket item
            parent.remove();

            BASKET_NAMES[i] = [];

            // update
            basket_del = document.querySelectorAll(".basket_del");
            basket_item_name = document.querySelectorAll(".basket_item_name");
            basket_item = document.querySelectorAll(".basket_item");
            basket_plus = document.querySelectorAll(".basket_plus");
            basket_drop = document.querySelectorAll(".basket_drop");
            basket_item_quantity = document.querySelectorAll(".basket_item_quantity");
            basket_item_price = document.querySelectorAll(".basket_item_price");

            // BASKET_NAME in input
            document.getElementById("delivery_array").value = BASKET_NAMES;

            return;
          }
        }
      };
    }

    // plus quantity basket item
    for (let item3 of basket_plus) {
      item3.onclick = (e) => {
        let parent = e.target.parentElement.parentElement;
        let del_index = find_index(parent);
        let count = Number(basket_item_quantity[del_index].innerText);
        count++;
        if (count < 21) {
          basket_item_quantity[del_index].innerText = count;
          for (let z = 0; z < BASKET_NAMES.length; z++) {
            if (BASKET_NAMES[z].length == 0)
              continue;
            if (BASKET_NAMES[z][0].includes(basket_item_name[del_index].innerText)) {
              let mas = BASKET_NAMES[z][0].split("\n");
              mas.splice(1, 1);
              mas.splice(2, 1);
              let price = mas[2].split(" ");
              BASKET_NAMES[z][1] = count;
              basket_item_price[del_index].innerText =
                Number(price[0]) * count;
              basket_items_sum.innerText =
                Number(basket_items_sum.innerText) +
                  Number(price[0]);

              // BASKET_NAME in input
              document.getElementById("delivery_array").value = BASKET_NAMES;

              return;
            }
          }
        }
      };
    }

    // minus quantity basket item
    for (let item3 of basket_drop) {
      item3.onclick = (e) => {
        let parent = e.target.parentElement.parentElement;
        let del_index = find_index(parent);
        let count = Number(basket_item_quantity[del_index].innerText);
        count--;
        if (count > 0) {
          basket_item_quantity[del_index].innerText = count;
          for (let z = 0; z < BASKET_NAMES.length; z++) {
            if (BASKET_NAMES[z].length == 0)
              continue;
            if (BASKET_NAMES[z][0].includes(basket_item_name[del_index].innerText)) {
              let mas = BASKET_NAMES[z][0].split("\n");
              mas.splice(1, 1);
              mas.splice(2, 1);
              let price = mas[2].split(" ");
              BASKET_NAMES[z][1] = count;
              basket_item_price[del_index].innerText =
                Number(price[0]) * count;
              basket_items_sum.innerText =
                Number(basket_items_sum.innerText) -
                  Number(price[0]);

              // BASKET_NAME in input
              document.getElementById("delivery_array").value = BASKET_NAMES;

              return;
            }
          }
        }
      };
    }
  };
}

document.getElementById("del_wind_close").
  onclick = () => {
    del_order_section.style.transform = "scaleY(0)";
    let arr = document.getElementsByClassName(
      "delivery_block_sect_item"
    );
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < basket_item_name.length; j++) {
        if (arr[i].innerText.includes(
          basket_item_name[j].innerText)) {
          arr[i].style.background = "rgb(225, 197, 114)";
          arr[i].style.color = "#fff";
          i++;
          break;
        }
        else {
          arr[i].style.background = "";
          arr[i].style.color = "rgb(37, 28, 6)";
        }
      }
    }
};

// change address
document.getElementById("del_address").onchange = (e) => {
  // ajax to server
  
  //basket_items_sum.innerText =
    //Number(basket_items_sum.innerText) +

};
