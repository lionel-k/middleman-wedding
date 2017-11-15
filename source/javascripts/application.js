//= require jquery
//= require bootstrap
//= require_tree .

const disableClick = (event) => {
  event.preventDefault();
};

const bindDisableClick = (element) => {
  element.addEventListener("click", disableClick);
};

// const changeActiveTab = (event) => {
//   event.
// };


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".disable-click").forEach(bindDisableClick);

  // document.querySelectorAll(".tab").forEach((tab) => {
  // tab.addEventListener("click", (event) => {
  //   document.querySelector(".active").classList.remove("active");
  //   event.currentTarget.classList.add("active");
  //   });
  // });


});

// document.addEventListener = (element) => {

// }


// document.querySelectorAll(".tab").forEach((tab) => {
//   tab.addEventListener("click", (event) => {
//     event.currentTarget.classList.toggle("active");
//   });
// });
