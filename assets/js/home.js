let rightIcon = document.querySelector(".right-icon");
let lefttIcon = document.querySelector(".left-icon");
let myImageList = document.getElementById("myImageList");
let headerImgs = document.querySelectorAll(".header-img");

//slider enhanced from AI
let number = 0;
function updateSlider() {
  if (number < 0) {
    number = headerImgs.length - 1;
  } else if (number >= headerImgs.length) {
    number = 0;
  }
  headerImgs.forEach((img, index) => {
    img.classList.remove("active");
    if (number === index) {
      img.classList.add("active");
    }
  });
}
function restAutoSlider() {
  clearInterval(autoSlider);
  autoSlider = setInterval(nextSlide, 5000);
}
function nextSlide() {
  number++;
  updateSlider();
}
function preSlide() {
  number--;
  updateSlider();
}
rightIcon.onclick = function () {
  nextSlide();
  restAutoSlider();
};
lefttIcon.onclick = function () {
  preSlide();
  restAutoSlider();
};
//key event
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    nextSlide();
    updateSlider();
  } else if (event.key === "ArrowLeft") {
    preSlide();
    restAutoSlider();
  }
});
//auto slider
let autoSlider = setInterval(nextSlide, 5000);
updateSlider();
//end of slider
// products-slider
//i used querySelectorAll to make same function many times
const scrollProducts = document.querySelectorAll(".productsScroll");
scrollProducts.forEach((item) => {
  item.addEventListener("wheel", (event) => {
    event.preventDefault();
    item.scrollLeft += event.deltaY;
  });
});

//valid email or phone number by reg in sign in page
//make sweet alert by my name
function showAmazonStyleAlert() {
  Swal.fire({
    title: "Added to Cart!",
    text: "Your item has been successfully added to the shopping cart.",
    icon: "success",
    confirmButtonText: "Proceed to Checkout",
    showCancelButton: true,
    cancelButtonText: "Continue Shopping",
    customClass: {
      popup: "amazon-alert-popup",
      confirmButton: "amazon-confirm-button",
      cancelButton: "amazon-cancel-button",
    },
  });
}
//sing in or up
function singinUp() {
  const chooseSign = document.getElementById("singinUp");
  let signIn = document.createElement("p");
  signIn.className = "activeٍSign";
  signIn.innerHTML = `<a href="/signpage.html">Hello,Sign In</a>`;
  let signUp = document.createElement("p");
  signUp.innerHTML = `<a href="/signup.html">Sign UP</a>`;
  signUp.className = "activeٍSign";

  chooseSign.appendChild(signIn);
  chooseSign.appendChild(signUp);
  chooseSign.onclick = null;
}
