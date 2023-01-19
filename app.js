// add to cart

let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".cart_b-n");
console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    let prevProductsCount = +productsCountEl.textContent
    productsCountEl.textContent = prevProductsCount + 1;
  });
}

// change like state
let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

likeBtns.forEach((btn) => 
  btn.addEventListener("click",function(){
    // 1 спосіб
  // if(btn.classList.contains("liked")){
  //   btn.classList.remove("liked");
  // } else {
  //   btn.classList.add("liked");
  // }
  // 2 спосіб
  btn.classList.toggle("liked");
}));

// modal
let moreDatailsBtns = document.querySelectorAll(".details");
let modal = document.querySelector(".modal"); 
let closeBtn = document.querySelector(".btn-close");

moreDatailsBtns.forEach((item) => item.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);

function openModal() {
modal.classList.add("show"); 
modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  };

modal.addEventListener("click", function(e){
  if(e.target===modal)
  {
    closeModal();
  }
});

document.querySelector(".send").addEventListener("click", function (e){
  e.preventDefault();
});

$(".slider-container").slick({
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true,
});