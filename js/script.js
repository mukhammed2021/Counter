const number = document.querySelector(".counter__number");
let startNumber = 0;

document.addEventListener("click", function (e) {
   if (e.target.closest("#reset")) {
      number.innerHTML = `${reset()}`;
      if (number.classList.contains("decrease")) {
         number.classList.remove("decrease");
      } else {
         number.classList.remove("increase");
      }
   }

   if (e.target.closest("#decrease")) {
      let dec = decrease();
      number.innerHTML = `${dec}`;
      if (dec < 0) {
         number.classList.add("decrease");
         number.classList.remove("increase");
      }
      if (startNumber === 0) {
         number.classList.remove("decrease");
         number.classList.remove("increase");
      }
   }

   if (e.target.closest("#increase")) {
      let inc = increase();
      number.innerHTML = `${inc}`;
      if (inc > 0) {
         number.classList.add("increase");
         number.classList.remove("decrease");
      }
      if (startNumber === 0) {
         number.classList.remove("decrease");
         number.classList.remove("increase");
      }
   }
});

function decrease() {
   startNumber--;
   return startNumber;
}

function increase() {
   startNumber++;
   return startNumber;
}

function reset() {
   return (startNumber = 0);
}
