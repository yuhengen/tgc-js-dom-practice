const classAelements = document.querySelectorAll(".a");
classAelements.forEach((element) => (element.style.backgroundColor = "red"));
const undercoverArrestedElements = document.querySelectorAll(
  "div.undercover.a"
);
undercoverArrestedElements.forEach(
  (element) => (element.style.backgroundColor = "yellow")
);
