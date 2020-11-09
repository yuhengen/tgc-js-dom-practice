const boxes = document.querySelectorAll(".box");
const rollBtn = document.querySelector("button");
const totalField = document.querySelector("span");
rollBtn.addEventListener("click", () => {
  let total = 0;
  boxes.forEach((box) => {
    const randomNum = Math.random();
    box.innerHTML = randomNum;
    total += randomNum;
  });
  totalField.innerHTML = total;
});
