function CarouselController(imageList, imageElement) {
  console.log(imageList, imageElement);
  this.imageList = imageList;
  this.imageElement = imageElement;
  this.currentPage = 0;
}

CarouselController.prototype.setPage = function (page) {
  console.log("setPage", page);
};

CarouselController.prototype.nextPage = function () {
  console.log("nextPage");
};

CarouselController.prototype.prevPage = function () {
  console.log("nextPage");
};

module.exports = CarouselController;
