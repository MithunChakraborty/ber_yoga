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