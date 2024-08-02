import "./style.scss";
import gsap from "gsap";

const ease = "power2.out";
const duration = 0.5;

const indicator = document.querySelectorAll(".indicator");
const paginations = document.querySelectorAll(".pagination");
const images = document.querySelectorAll(".image");
const buttons = document.querySelectorAll(".button");
const imageTexts = document.querySelectorAll(".image-text");
const bgGradients = document.querySelectorAll(".bg-gradient");

const animateElements = (elements, properties) => {
  gsap.to(elements, { ...properties, duration, ease });
};

const indicatorColor = ["#000", "#4b0b4b", "#191927", "#25CC6B"];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    animateElements(images, { opacity: 0 });
    animateElements(images[index], { opacity: 1 });
    animateElements(buttons, { filter: "grayscale(1)", opacity: 0.5 });
    animateElements(button, { filter: "grayscale(0)", opacity: 1 });
    animateElements(paginations, { opacity: 0.5 });
    animateElements(paginations[index], { opacity: 1 });
    animateElements(indicator, {
      x: `${index * 100}%`,
      backgroundColor: indicatorColor[index],
    });
    animateElements(imageTexts, { x: `-${index * 100}%` });
    animateElements(bgGradients, { opacity: 0 });
    animateElements(bgGradients[index], { opacity: 1 });
  });
});
