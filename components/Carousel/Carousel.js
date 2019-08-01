class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.left = document.querySelector(".left-button");
    this.right = document.querySelector(".right-button");
    this.images = Array.from(document.querySelectorAll(".carousel img"));
    this.index = 0;
    this.current = this.images[this.index];
    this.show(this.current);
    this.left.addEventListener("click", () => this.previous());
    this.right.addEventListener("click", () => this.next());
  }

  show(image) {
    image.style.display = "block";
  }

  hide(image) {
    image.style.display = "none";
  }

  previous() {
    this.hide(this.current);
    if (this.index < 1) {
      this.index = this.images.length - 1;
    } else {
      this.index--;
    }
    this.current = this.images[this.index];
    this.show(this.current);
  }

  next() {
    this.hide(this.current);
    if (this.index < this.images.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.current = this.images[this.index];
    this.show(this.current);
  }

}
let carousel = document.querySelector(".carousel");
const runCarousel = new Carousel(carousel);