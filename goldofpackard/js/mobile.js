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

function flex_menu() {
    third_sec2.style.marginTop = `-${third_sec2.offsetHeight}px`;
    if (this.document.body.offsetWidth < 1011) {
        logo_mobile.src="icon/logo.png";
        menu_in.style.display = "block";
        menu_out.style.display = "none";
        document.body.style.overflow = 'auto';
        nav.style.transform = "translateY(-160%)";
        header.style.height = `${mobile_logo_block.offsetHeight}px`;
        //first_section.style.margin = `${header.offsetHeight}px 0px 0px`;
        first_section.style.margin = "7.2rem 0px 0px";
        header.style.top = 0;
    }
    else {
        logo_mobile.src="icon/logo_mobile.png";
        header.style.height = "auto";
        first_section.style.margin = "0px 0px 0px 0px";
        menu_in.style.display = "none";
        menu_out.style.display = "none";
        nav.style.transform = "translateY(0%)";
        document.body.style.overflow = 'auto';
    }
    console.log(header.offsetHeight);
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
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (this.document.body.offsetWidth > 1010) {
        if (windowScroll > (first_section.offsetHeight - 100)) {
            header.style.display = "flex";
            logo_mobile.src="icon/logo_mobile.png";
        }
        else {
            header.style.display = "none";
            logo_mobile.src="icon/logo.png";
        }
    }
    else {
    }
});
var list = nav.children;
for (var j=0, child; child=list[j]; j++) {
    child.addEventListener('click', () => {
            menu_in.style.display = "block";
            menu_out.style.display = "none";
            document.body.style.overflow = 'auto';
            nav.style.transform = "translateY(-160%)";
            header.style.height = `7.2rem`;
    })
}
// mobile menu enter
menu_in.addEventListener(
    'click', 
    () => {
        menu_in.style.display = "none";
        menu_out.style.display = "block";
        header.style.height = "100vh";
        document.body.style.overflow = 'hidden';
        nav.style.transform = "translateY(0)";
    }
);
// mobile menu exit
menu_out.addEventListener(
    'click', 
    () => {
        menu_in.style.display = "block";
        menu_out.style.display = "none";
        document.body.style.overflow = 'auto';
        nav.style.transform = "translateY(-160%)";
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
});
// gallery 6 section
var _quantity_img = list6_sect.children.length;
const _slide = 100 / _quantity_img;
var _count = 0;
var wrapper_btn6 = document.getElementById("wrapper_btn6").children;
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
});
var _deadline = 0;
if (document.body.offsetWidth < 1011) 
    _deadline = 100 - _slide;
else
    _deadline = 100 - _slide * 3;
next6.addEventListener('click', () => {
    if ((list6_sect.style.transform < `translateX(-${_deadline}%)`) ||
        (list6_sect.style.transform == "translateX(0%)")) {
        _count += _slide;
        list6_sect.style.transform = `translateX(-${_count}%)`;        
        for (var i = 0; i < wrapper_btn4.length; i++) {
            if (wrapper_btn6[i].className == "active_btn4") {
                wrapper_btn6[i].className = "";
                wrapper_btn6[i + 1].className = "active_btn4";
                break;
            }
        }
    }
});