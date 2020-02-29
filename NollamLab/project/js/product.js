// Product desc change
const descText = document.getElementById('desc-text');
const compText = document.getElementById('comp-text');
const descBtn = document.getElementById('desc-btn');
const compBtn = document.getElementById('comp-btn');

descBtn.addEventListener('click', () => {
  descBtn.className = "product-btn-active";
  compBtn.className = "";
  descText.className = "product-text-active";
  compText.className = "product-text-nonactive";
});
compBtn.addEventListener('click', () => {
  descBtn.className = "";
  compBtn.className = "product-btn-active";
  compText.className = "product-text-active";
  descText.className = "product-text-nonactive";
});