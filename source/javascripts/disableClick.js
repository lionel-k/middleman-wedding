const disableClick = function(event) {
  event.preventDefault();
};

const bindDisableClick = function(element) {
  element.addEventListener("click", disableClick);
};


document.querySelectorAll(".disable-click").forEach(bindDisableClick);

document.querySelectorAll(".tab").forEach(function(tab){
tab.addEventListener("click", function(event) {
  document.querySelector(".active").classList.remove("active");
  event.currentTarget.classList.add("active");
  });
});
