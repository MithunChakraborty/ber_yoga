var first_section = document.querySelector("#first_section");
var _header = document.querySelector("header");
var _nav = document.querySelector("nav");
var logo_mobile = document.getElementById("logo_mobile");
const menuBtn = document.getElementById("mobile_enter");
const menuCloseBtn = document.getElementById("mobile_exit");
const menuBtn2 = document.getElementById("mobile_enter2");
const mobile_logo_block = document.getElementById("mobile_logo_block");

window.onload = function() {
    //
    //
    if (this.document.body.offsetWidth < 929) {
        _nav.style.display = "flex";
        _nav.style.transform = "translateY(-150%)";
        _nav.style.overflow = 'hidden';
        _header.style.overflow = 'hidden';
        document.body.style.overflow = 'auto';
        _header.style.height = `${mobile_logo_block.offsetHeight}px`;
        first_section.style.margin = `${_header.offsetHeight}px 0px 0px`;
        _header.style.top = 0 

        var list = _nav.children;
        for (var j=0, child; child=list[j]; j++) {
            child.addEventListener('click', () => {
                if (i == 1) {
                    menuBtn.style.display = "block";
                    menuCloseBtn.style.display = "none";
                    document.body.style.overflow = 'auto';
                    _nav.style.transform = "translateY(-150%)";
                    _header.style.height = `${mobile_logo_block.offsetHeight}px`;
                    i--;
                }
                else {
                    
                    i++;
                }
            })
        }
    }
};
window.addEventListener('scroll', flex_header);
function flex_header(event) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (document.body.clientWidth > 929) {
        logo_mobile.src="icon/logo_mobile.png"
        if (windowScroll > (first_section.offsetHeight - 100)) {
            _header.style.display = "flex";
        }
        else
            _header.style.display = "none";
        console.log(windowScroll);
    }
}

// menu btn
var i = 0;
menuBtn.addEventListener('click', () => {
    if (i == 0) {
        menuBtn.style.display = "none";
        menuCloseBtn.style.display = "block";
        _nav.style.display = "flex";
        _header.style.height = "100vh";
        document.body.style.overflow = 'hidden';
        _nav.style.transform = "translateY(0)";
        _nav.style.overflow = 'hidden';
        _header.style.overflow = 'hidden';
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
        document.body.style.overflow = 'auto';
        _nav.style.transform = "translateY(-150%)";
        _header.style.height = `${mobile_logo_block.offsetHeight}px`;
        i--;
    }
    else {
        
        i++;
    }
})