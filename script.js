
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    alert("Thank You For signing up!");
    

    signupForm.reset();
  });
});
window.addEventListener("load", () => {
  const rocket = document.querySelector(".rocket");


  setTimeout(() => {

    setTimeout(() => {
      rocket.classList.remove("takeoff");
    }, 1000);
  }, 1000);
});
