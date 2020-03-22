window.addEventListener('scroll', flex_header);
let _nav = document.querySelector("nav");
function flex_header(event) {
    let _header = document.querySelector("header");
    let first_section = document.querySelector("#first_section")
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (document.body.clientWidth > 929) {
        if (windowScroll > (first_section.offsetHeight - 100)) {
            _header.style.display = "flex";
        }
        else
            _header.style.display = "none";
    }
    else
        if (windowScroll > 200) {
            _header.style.display = "flex"; 
        }
        else
            if (nav.style.display == "none") {
                _header.style.display = "none"; 
            }
}

const menuBtn = document.getElementById("mobile_enter");
const menuCloseBtn = document.getElementById("mobile_exit");
var i = 0;
menuBtn.addEventListener('click', () => {
    if (i == 0) {
        menuBtn.style.display = "none";
        menuCloseBtn.style.display = "block";
        _nav.style.display = "flex";
        i++;
    }
    else {
        
        i--;
    }
});
menuCloseBtn.addEventListener('click', () => {
    if (i == 1) {
        menuBtn.style.display = "block";
        menuCloseBtn.style.display = "none";
        _nav.style.display = "none";
        i--;
    }
    else {
        
        i++;
    }
});