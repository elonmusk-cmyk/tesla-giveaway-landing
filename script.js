document.addEventListener("DOMContentLoaded", function () {

window.selectVehicle = function(car, fee) {

    localStorage.setItem("selectedTesla", car);
    localStorage.setItem("deliveryFee", fee);

    const selectedCar = document.getElementById("selectedCar");

    if (selectedCar) {
        selectedCar.value = car;
    }

    const form = document.getElementById("participate");

    if (form) {

        form.style.display = "block";

        form.scrollIntoView({
            behavior: "smooth"
        });

    }

};


window.goToCheckout = function() {

    const checkout = document.getElementById("checkout");

    if (checkout) {

        checkout.style.display = "block";

        checkout.scrollIntoView({
            behavior: "smooth"
        });

    }

};


window.confirmOrder = function() {

    const confirmation = document.getElementById("confirmation");

    if (confirmation) {

        confirmation.style.display = "block";

        confirmation.scrollIntoView({
            behavior: "smooth"
        });

    }

};


});
