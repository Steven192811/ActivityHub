import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  increaseTextSize() {
    const textElements = document.querySelectorAll(".text");
    textElements.forEach((element) => {
      element.style.fontSize = "larger";
    });
  }

  decreaseTextSize() {
    const textElements = document.querySelectorAll(".text");
    textElements.forEach((element) => {
      element.style.fontSize = "smaller";
    });
  }

  resetTextSize() {
    const textElements = document.querySelectorAll(".text");
    textElements.forEach((element) => {
      element.style.fontSize = ""; // Reset to the default font size
    });
  }
}
