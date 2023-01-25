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

// function showModalByScroll(){
//   if(window.scrollY >= document.body.scrollHeight / 2) {
//     openModal();
//     window.removeEventListener("scroll", showModalByScroll);
//   }
// }
// window.addEventListener("scroll", showModalByScroll);

// setTimeout(openModal, 5000);
// setInterval(openModal, 5000);




// class Car {
//   constructor(model, color, year) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
//     hi = function(){
//       console.log("Hi" + this.model);
//     };
//     hello = function(){
//       console.log("hello " + this.model + " " + this.color);
//     };
//   }


// let audi = new Car("a4","black",2008);
// let lexus = new Car("es350","white",2008);
// let bmw = new Car("328","grey",2020);

// console.log(audi);
// console.log(lexus);
// console.log(bmw);

// audi.hello();
// lexus.hello();
// bmw.hello();




let inrementBtns = document.querySelectorAll(".pr-qtt-increment");
let derementBtns = document.querySelectorAll(".pr-qtt-decrement");
let productsCount = document.querySelectorAll(".product-quantity .pr-qtt");


console.log(inrementBtns);
console.log(derementBtns);
console.log(productsCount);



function Counter(inrementBtns,derementBtns,inputField) {
  this.domRefs = {
    inrementBtns,
    derementBtns,
    inputField,
  };
this.toggleButtonState = function(){
  let count = +this.domRefs.inputField.value;
  this.domRefs.derementBtns.disabled = count <= 1;
  this.domRefs.inrementBtns.disabled = count >= 10;
};
this.toggleButtonState();


this.increment = function(){
  this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
  this.toggleButtonState()
};

this.decrement = function(){
  this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
  this.toggleButtonState()
};

this.domRefs.inrementBtns.addEventListener("click", 
this.increment.bind(this)
);

this.domRefs.derementBtns.addEventListener("click", 
this.decrement.bind(this)
);
};

let counters = [];
productsCount.forEach(
  (item,i) =>
(counters[i]= new Counter(inrementBtns[i],derementBtns[i],item)));








// const counter1 = new Counter(inrementBtns,derementBtns,productsCount);
// console.log(counter1);