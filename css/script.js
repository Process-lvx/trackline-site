document.addEventListener("DOMContentLoaded", function() {
    console.log("Trackline est prêt !");

    const button = document.querySelector("button");
    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "#FFA500";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#FFD700";
    });
});
