const searchBar = document.getElementById("search-bar");
const carCards = document.querySelectorAll(".car-card");

searchBar.addEventListener("keyup", function () {
    const query = searchBar.value.toLowerCase();

    carCards.forEach(car => {
        const title = car.querySelector(".car-title").innerText.toLowerCase();
        if (title.includes(query)) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });
});
