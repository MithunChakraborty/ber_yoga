const mmenuBtn = document.getElementById("m-menu-btn");
const mmenu = document.getElementById("m-menu");
const mmenuClose = document.getElementById("close-menu");
var i = 0;
mmenuBtn.addEventListener('click', () => {
	if (i == 0) {
		mmenu.className += " m-menu-active";
		i++;
	}
	else {
		mmenu.className = "m-menu";
		i--;
	}
});
mmenuClose.addEventListener('click', () => {
	if (i == 0) {
		mmenu.className += " m-menu-active";
		i++;
	}
	else {
		mmenu.className = "m-menu";
		i--;
	}
});

/* PRICE */
const cards = document.querySelectorAll('.price-item');
for (let z = 0; z < cards.length; z++) {
	cards[z].addEventListener('mousemove', () => {
		for (let u = 0; u < cards.length; u++) {
			cards[u].className = "price-item";
		}
		cards[z].className += " price-item-active";
	});
}