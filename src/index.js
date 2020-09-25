const CarouselController = require("./CarouselController");

const btnLeftElement = document.getElementById("left-btn");
const btnRightElement = document.getElementById("right-btn");
const dotsElement = document.getElementById("dots");
const dotElementList = dotsElement.querySelectorAll("li");
const imageElement = document.getElementById("img");

const IMGList = [
  "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  "https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg",
  "https://previews.123rf.com/images/alexis84/alexis841404/alexis84140400557/27773925-planet-earth-and-blue-human-eye-elements-of-this-image-furnished-by-nasa-.jpg",
  "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=1000&h=400",
];

function init() {
  // create instance CarouselController
  carouselController = new CarouselController(IMGList, imageElement);

  // set click event on each dot
  console.log(dotElementList);
  for (let i = 0; i < dotElementList.length; i++) {
    dotElementList[i].addEventListener("click", function () {
      carouselController.setPage(i);
    });
  }

  // set click event on left, right button
  btnLeftElement.addEventListener("click", carouselController.prevPage);
  btnRightElement.addEventListener("click", carouselController.nextPage);
}

init();
