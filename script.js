document.addEventListener("DOMContentLoaded", function () {

    // Select Tesla vehicle
    window.selectVehicle = function (car, fee) {

        localStorage.setItem("selectedTesla", car);
        localStorage.setItem("deliveryFee", fee);

        const selectedCar = document.getElementById("selectedCar");

        if (selectedCar) {
            selectedCar.value = car;
        }

        const form = document.getElementById("participate");

        if (form) {
            form.scrollIntoView({
                behavior: "smooth"
            });
        }

    };


    // Order button goes to checkout
    window.goToCheckout = function () {

        const car = localStorage.getItem("selectedTesla") || "Tesla Model 3 2025";
        const fee = localStorage.getItem("deliveryFee") || "$299";

        const checkoutCar = document.getElementById("checkoutCar");

        if (checkoutCar) {
            checkoutCar.textContent = car;
        }

        const checkoutFee = document.getElementById("checkoutFee");

        if (checkoutFee) {
            checkoutFee.textContent = fee;
        }

        const checkout = document.getElementById("checkout");

        if (checkout) {
            checkout.scrollIntoView({
                behavior: "smooth"
            });
        }

    };


    // Confirmation page
    window.confirmOrder = function () {

        const car = localStorage.getItem("selectedTesla") || "Tesla Model 3 2025";

        const confirmCar = document.getElementById("confirmCar");

        if (confirmCar) {
            confirmCar.textContent = car;
        }

        const confirmation = document.getElementById("confirmation");

        if (confirmation) {
            confirmation.scrollIntoView({
                behavior: "smooth"
            });
        }

    };


    // Live style notification popup
    const popup = document.getElementById("popup");

    const messages = [
        "⭐ New customer update available",
        "🚗 Vehicle selection updated",
        "⚡ Tesla information refreshed",
        "🌎 New delivery update available"
    ];

    let index = 0;

    setInterval(function () {

        if (popup) {

            popup.textContent = messages[index];

            popup.style.display = "block";

            setTimeout(function () {
                popup.style.display = "none";
            }, 4000);

            index++;

            if (index >= messages.length) {
                index = 0;
            }

        }

    }, 5000);


});
