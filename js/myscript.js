function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.addEventListener("click", function(event) {
  if (window.screen.width <= 800) {
    if (event.target.className === "dropbtn") {
      if (event.target.nextElementSibling.style.display === "" || event.target.nextElementSibling.style.display === "none") {
        event.target.nextElementSibling.style.display = "block";
      } else {
        event.target.nextElementSibling.style.display = "none";
      }
    } 
  }
});
