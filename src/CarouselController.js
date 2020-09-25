function CarouselController(imageList, imageElement) {
  this.imageList = imageList;
  this.imageElement = imageElement;
  this.currentPage = 0;
}

CarouselController.prototype.setPage = function (page) {
  console.log("setPage", page);
  this.imageElement.src = this.imageList[page];
  this.currentPage = page;
};

CarouselController.prototype.nextPage = function () {
  let nextPage = this.currentPage + 1;
  if (nextPage >= this.imageList.length) {
    nextPage = 0;
  }

  this.imageElement.src = this.imageList[nextPage];
  console.log(`nextPage ${this.currentPage} -> ${nextPage}`);
  this.currentPage = nextPage;

  return this.currentPage;
};

CarouselController.prototype.prevPage = function () {
  let prevPage = this.currentPage - 1;

  if (prevPage < 0) {
    prevPage = this.imageList.length - 1;
  }

  this.imageElement.src = this.imageList[prevPage];
  console.log(`prevPage ${this.currentPage} -> ${prevPage}`);
  this.currentPage = prevPage;

  return this.currentPage;
};

module.exports = CarouselController;
