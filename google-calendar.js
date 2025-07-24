const { Calendar } = require("vanilla-calendar-pro");

//calendar btn
function calendarOpen() {
   const button = document.getElementById("calendarbtn");
   button.classList.toggle("active");
   
   const iframe = document.getElementById("calendar");
   if (iframe.style.display === "none" || iframe.style.display === "") {
       iframe.style.display = "block";
   } else {
       iframe.style.display = "none";
   }
}