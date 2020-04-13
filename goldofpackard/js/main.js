var header = document.querySelector("header");
var logo_mobile = document.getElementById("logo_mobile");
var mobile_logo_block = document.getElementById("mobile_logo_block");
var nav = document.querySelector("nav");
var menu_in = document.getElementById("mobile_enter");
var menu_out = document.getElementById("mobile_exit");
var third_sign = document.getElementById("third_sign");
var third_sec2 = document.getElementById("third_section_continue");
var first_section = document.getElementById("first_section");
var third_btn = document.getElementById("third_btn");
var prev4 = document.getElementById("prev4");
var next4 = document.getElementById("next4");
var prev6 = document.getElementById("prev6");
var next6 = document.getElementById("next6");
var list4_sect = document.getElementById("images");
var list6_sect = document.getElementById("images6");
var seventh3_btn = document.getElementById("seventh3_btn");
var polic_btn = document.getElementById("polic_btn");
var politic_section = document.getElementById("politic_section");
var call_me3 = document.getElementById("call_me3");
var call_me2 = document.getElementById("call_me2");
var call_me = document.getElementById("call_me");
var call_me_section = document.getElementById("call_me_section");
var order_section = document.getElementById("order_section");
var wind_close = document.getElementsByClassName("wind_close");
var order_click_start = document.getElementById("order_click_start");
var anch = document.getElementsByClassName("_anchor");

function flex_menu() {
    for (var p = 0; p < anch.length; p++) {
        anch[p].style.marginTop = `-${header.offsetHeight}px`;
        anch[p].style.paddingTop = `${header.offsetHeight}px`;
    }

    third_sec2.style.marginTop = `-${third_sec2.offsetHeight}px`;
    if (this.document.body.offsetWidth < 1011) {
        logo_mobile.src="icon/logo_header_i.png";
        menu_in.style.display = "block";
        menu_out.style.display = "none";
        document.body.style.overflow = 'auto';
        //
        nav.style.transform = "translateY(-170%)";
        nav.style.transform = "scaleY(0)";
        header.style.height = `${mobile_logo_block.offsetHeight}px`;
        first_section.style.margin = "7.2rem 0px 0px";
        header.style.top = 0;
    }
    else {
        logo_mobile.src="icon/logo_big.png";
        header.style.height = "auto";
        first_section.style.margin = "0px 0px 0px 0px";
        menu_in.style.display = "none";
        menu_out.style.display = "none";
        //
        nav.style.transform = "translateY(0%)";
        nav.style.transform = "scaleY(1)";
        document.body.style.overflow = 'auto';
    }
}
window.onload = () => {
    flex_menu();
    list4_sect.style.transform = "translateX(0%)";
    list6_sect.style.transform = "translateX(0%)";
};
window.onresize = () => {
    flex_menu();
};
window.onorientationchange = () => {
    flex_menu();
};
window.addEventListener('scroll', function(event) {
    for (var p = 0; p < anch.length; p++) {
        anch[p].style.marginTop = `-${header.offsetHeight}px`;
        anch[p].style.paddingTop = `${header.offsetHeight}px`;
    }

    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (this.document.body.offsetWidth > 1010) {
        if (windowScroll > (first_section.offsetHeight - 100)) {
            header.style.display = "flex";
            //logo_mobile.src="icon/logo_mobile.png";
        }
        else {
            header.style.display = "none";
            //logo_mobile.src="icon/logo.png";
        }
    }
    else {
    }
});
var list = nav.children;
for (var j=0, child; child=list[j]; j++) {
    if (document.body.offsetWidth < 1011) {
        child.addEventListener('click', () => {
        menu_in.style.display = "block";
        menu_out.style.display = "none";
        document.body.style.overflow = 'auto';
        //
        nav.style.transform = "translateY(-170%)";
        nav.style.transform = "scaleY(0)";
        header.style.height = `7.2rem`;
        });
    }
    else {
        document.documentElement.clientHeight -= header.offsetHeight;
    }
}
// mobile menu enter
menu_in.addEventListener(
    'click',
    () => {
        menu_in.style.display = "none";
        menu_out.style.display = "block";
        header.style.height = "100vh";
        document.body.style.overflow = 'hidden';
        //nav.style.transform = "translateY(0)";
        nav.style.transform = "scaleY(1)";
    }
);
// mobile menu exit
menu_out.addEventListener(
    'click',
    () => {
        menu_in.style.display = "block";
        menu_out.style.display = "none";
        document.body.style.overflow = 'auto';
        //nav.style.transform = "translateY(-170%)";
        nav.style.transform = "scaleY(0)";
        header.style.height = `${mobile_logo_block.offsetHeight}px`;
    }
);
var z = 0;
// third_continue
third_btn.addEventListener('click', () => {
    if (z == 0) {
        third_sec2.style.marginTop = `0px`;
        third_sign.style.transform = "rotate(180deg)";
        z++;
    }
    else {
        third_sec2.style.marginTop = `-${third_sec2.offsetHeight}px`;
        third_sign.style.transform = "rotate(0deg)";
        z--;
    }
});
// gallery 4 section
var quantity_img = list4_sect.children.length;
const slide = 100 / quantity_img;
var count = 0;
var wrapper_btn4 = document.getElementById("wrapper_btn4").children;
prev4.addEventListener('click', () => {
    if (list4_sect.style.transform != "translateX(0%)") {
        list4_sect.style.transform = `translateX(-${count - slide}%)`;
        count -= slide;
        for (var i = 0; i < wrapper_btn4.length; i++) {
            if (wrapper_btn4[i].className == "active_btn4") {
                wrapper_btn4[i].className = "";
                wrapper_btn4[i - 1].className = "active_btn4";
                break;
            }
        }
    }
    else {
        count = 100 - slide
        list4_sect.style.transform = `translateX(-${count}%)`;
        for (var i = 0; i < wrapper_btn4.length; i++) {
            if (wrapper_btn4[i].className == "active_btn4") {
                wrapper_btn4[i].className = "";
                wrapper_btn4[wrapper_btn4.length - 1].className = "active_btn4";
                break;
            }
        }
    }
});
next4.addEventListener('click', () => {
    if ((list4_sect.style.transform < `translateX(-${100 - slide}%)`) ||
        (list4_sect.style.transform == "translateX(0%)")) {
        count += slide;
        list4_sect.style.transform = `translateX(-${count}%)`;
        for (var i = 0; i < wrapper_btn4.length; i++) {
            if (wrapper_btn4[i].className == "active_btn4") {
                wrapper_btn4[i].className = "";
                wrapper_btn4[i + 1].className = "active_btn4";
                break;
            }
        }
    }
    else {
        list4_sect.style.transform = "translateX(0%)";
        count = 0;
        for (var i = 0; i < wrapper_btn4.length; i++) {
            if (wrapper_btn4[i].className == "active_btn4") {
                wrapper_btn4[i].className = "";
                wrapper_btn4[0].className = "active_btn4";
                break;
            }
        }
    }
});
// gallery 6 section
var _quantity_img = list6_sect.children.length;
const _slide = 100 / _quantity_img;
var _count = 0;
var wrapper_btn6 = document.getElementById("wrapper_btn6").children;
var _deadline = 0;
if (document.body.offsetWidth < 1011)
    _deadline = 100 - _slide;
else
    _deadline = 100 - _slide * 3;
prev6.addEventListener('click', () => {
    if (list6_sect.style.transform != "translateX(0%)") {
        list6_sect.style.transform = `translateX(-${_count - _slide}%)`;
        _count -= _slide;
        for (var i = 0; i < wrapper_btn6.length; i++) {
            if (wrapper_btn6[i].className == "active_btn4") {
                wrapper_btn6[i].className = "";
                wrapper_btn6[i - 1].className = "active_btn4";
                break;
            }
        }
    }
    else {
        _count = _deadline
        list6_sect.style.transform = `translateX(-${_count}%)`;
        for (var i = 0; i < wrapper_btn6.length; i++) {
            if (wrapper_btn6[i].className == "active_btn4") {
                wrapper_btn6[i].className = "";
                wrapper_btn6[wrapper_btn6.length - 1].className = "active_btn4";
                break;
            }
        }
    }
});
next6.addEventListener('click', () => {
    if ((list6_sect.style.transform < `translateX(-${_deadline}%)`) ||
        (list6_sect.style.transform == "translateX(0%)")) {
        _count += _slide;
        list6_sect.style.transform = `translateX(-${_count}%)`;
        for (var i = 0; i < wrapper_btn6.length; i++) {
            if (wrapper_btn6[i].className == "active_btn4") {
                wrapper_btn6[i].className = "";
                wrapper_btn6[i + 1].className = "active_btn4";
                break;
            }
        }
    }
    else {
        list6_sect.style.transform = "translateX(0%)";
        _count = 0;
        for (var i = 0; i < wrapper_btn6.length; i++) {
            if (wrapper_btn6[i].className == "active_btn4") {
                wrapper_btn6[i].className = "";
                wrapper_btn6[0].className = "active_btn4";
                break;
            }
        }
    }
});
// seventh
var clock = 0
seventh3_btn.addEventListener('click', () => {
    if (clock == 0) {
        document.getElementById("submenu3").style.transform = "scaleY(1)";
        clock++;
    }
    else {
        document.getElementById("submenu3").style.transform = "scaleY(0)";
        clock--;
    }
});
var list3_sub = document.getElementById("submenu3").childNodes;
for (var u = 0; u < list3_sub.length; u++) {
    list3_sub[u].addEventListener('click', (event) => {
        let x = event.target.childNodes[0];
        document.getElementById("quantity_stol").value = x.innerText;
        document.getElementById("submenu3").style.transform = "scaleY(0)";
    });
}
// politic block
polic_btn.addEventListener('click', () => {
    politic_section.style.transform = "scaleY(1)";
});
politic_section.addEventListener("click", () => {
    politic_section.style.transform = "scaleY(0)";
});
// call me
var call = [call_me, call_me2, call_me3];
for (var o = 0; o < call.length; o++) {
    call[o].addEventListener("click", () => {
        call_me_section.style.transform = "scaleY(1)";
    });
}
for (let btn of wind_close) {
    btn.addEventListener("click", () => {
        call_me_section.style.transform = "scaleY(0)";
        order_section.style.transform = "scaleY(0)";
    });
}
// order
order_click_start.addEventListener("click", () => {
    order_section.style.transform = "scaleY(1)";
    let date_stol = document.getElementById("date_stol");
    let time_stol = document.getElementById("time_stol");
    let quantity_stol = document.getElementById("quantity_stol");
    let date_order = document.getElementById("date_order");
    let quantity_order = document.getElementById("quantity_order");
    let time_order = document.getElementById("time_order");
    date_order.value = date_stol.value;
    quantity_order.value = quantity_stol.value;
    time_order.value = time_stol.value;
    document.getElementById("sp_qu").textContent = quantity_order.value
    document.getElementById("sp_date").textContent = date_order.value
    document.getElementById("sp_time").textContent = time_order.value
});
document.getElementById("order_change_btn").addEventListener("click", () => {
    order_section.style.transform = "scaleY(0)";
});
//якоря
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
// слайды в полный экран
var slides6 = document.getElementsByClassName(".gallery6_item");
var slides_section = document.getElementById("slides_section");
var slides_img = document.getElementById("slides_img");
/*slides6.forEach((item, i) => {
  item.onclick = function() {
    slides_section.style.transform = "scaleY(1)";
    slides_img.src=`img/sixth_img${i+1}.jpg`
  }
});*/

slides_section.onclick = function() {
  slides_section.style.transform = "scaleY(0)";
}
