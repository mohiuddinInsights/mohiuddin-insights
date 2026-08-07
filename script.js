document.addEventListener("DOMContentLoaded", function () {
    console.log("Mohiuddin Insights is ready!");

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});