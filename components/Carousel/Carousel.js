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
    console.log(this.index);
  }

  hide(image) {
    image.style.display = "none";
  }

  previous() {

  }

  next() {
    this.hide(this.current);
    this.index++
    this.current = this.images[this.index];
    this.show(this.current);
  }

  go() {
    console.log("Go works!");
  }
}
let carousel = document.querySelector(".carousel");
const runCarousel = new Carousel(carousel);
runCarousel.go();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
