import { getRandomHslColor } from "./color.js";

document.querySelector("button").addEventListener("click", () =>{
  document.body.style.backgroundColor = getRandomHslColor();
})