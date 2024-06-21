const img_src = document.querySelector("img");
setInterval(() => {
  console.log(innerWidth, innerHeight, outerHeight, outerWidth);

  if (innerWidth >= 740) {
    img_src.src = "./images/image-product-desktop.jpg";
  } else {
    img_src.src = "./images/image-product-mobile.jpg";
  }
}, 1000);
let img = document.querySelector(".img-change");
console.log(innerWidth, innerHeight, outerHeight, outerWidth);
