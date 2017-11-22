document.querySelectorAll(".tab").forEach(function(tab){
tab.addEventListener("click", function(event) {
  document.querySelector(".active").classList.remove("active");
  event.currentTarget.classList.add("active");
  });
});
