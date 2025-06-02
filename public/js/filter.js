document.addEventListener('DOMContentLoaded', function () {
  const filterForm = document.querySelector('.filter-form');
  const carCards = document.querySelectorAll('.car-card');

  filterForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const filters = {
      brand: document.getElementById('brand').value.toLowerCase(),
      minPrice: parseInt(document.getElementById('min-price').value) || 0,
      maxPrice: parseInt(document.getElementById('max-price').value) || Infinity,
      year: document.getElementById('year').value,
      fuel: document.getElementById('fuel').value.toLowerCase(),
      gear: document.getElementById('gear').value.toLowerCase(),
      maxKm: parseInt(document.getElementById('km').value) || Infinity
    };



    carCards.forEach(car => {
      const brand = car.dataset.brand.toLowerCase();
      const price = parseInt(car.dataset.price);
      const year = car.dataset.year;
      const fuel = car.dataset.fuel.toLowerCase();
      const gear = car.dataset.gear.toLowerCase();
      const km = parseInt(car.dataset.km);

      const matches =
        (filters.brand === "" || brand === filters.brand) &&
        (price >= filters.minPrice && price <= filters.maxPrice) &&
        (filters.year === "" || year === filters.year) &&
        (filters.fuel === "" || fuel === filters.fuel) &&
        (filters.gear === "" || gear === filters.gear) &&
        (km <= filters.maxKm);

      car.style.display = matches ? "block" : "none";
    });
  });

  filterForm.addEventListener('reset', function () {
    console.log("Filtreler sıfırlandı");
    carCards.forEach(car => {
      car.style.display = "block";
    });
  });
});
