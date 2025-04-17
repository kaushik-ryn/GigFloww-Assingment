// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the form from actually submitting
    alert("Thank You For signing up!");
    
    // Optionally, you can reset the form
    signupForm.reset();
  });
});
