document.addEventListener("DOMContentLoaded", function () {

    // View All Models button
    window.scrollToModels = function () {
        const models = document.getElementById("models");

        if (models) {
            models.scrollIntoView({
                behavior: "smooth"
            });
        }
    };


    // Select Tesla vehicle
    window.selectVehicle = function (car, fee) {

        localStorage.setItem("selectedTesla", car);
        localStorage.setItem("deliveryFee", fee);

        const checkoutCar = document.getElementById("checkoutCar");

        if (checkoutCar) {
            checkoutCar.textContent = car;
        }

        alert(
            car + " selected\nDelivery Fee: " + fee
        );

    };


    // Checkout button
    window.goToCheckout = function () {

        const name = document.getElementById("name");

        if (name && name.value === "") {

            alert("Please enter your information");

            return;

        }


        document.getElementById("checkout")
        .scrollIntoView({
            behavior:"smooth"
        });

    };



    // Confirm order
    window.confirmOrder = function () {

        const car =
        localStorage.getItem("selectedTesla")
        || "Tesla Model 3";


        const confirmCar =
        document.getElementById("confirmCar");


        if(confirmCar){
            confirmCar.textContent = car;
        }


        document.getElementById("confirmation")
        .scrollIntoView({
            behavior:"smooth"
        });


    };



    // Testimonial popup

    const popup = document.getElementById("popup");


    const messages = [

        "⭐ New customer update available",

        "🚗 Vehicle information updated",

        "⚡ Electric vehicle news available",

        "🌎 New community update"

    ];


    let index = 0;


    setInterval(function(){

        if(popup){

            popup.textContent = messages[index];

            popup.style.display = "block";


            setTimeout(function(){

                popup.style.display = "none";

            },4000);


            index++;


            if(index >= messages.length){

                index = 0;

            }

        }

    },5000);


});
