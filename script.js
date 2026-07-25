document.addEventListener("DOMContentLoaded", function () {

    // View All Models button
    const viewButton = document.querySelector(".hero button");

    if (viewButton) {
        viewButton.addEventListener("click", function () {
            document.getElementById("models").scrollIntoView({
                behavior: "smooth"
            });
        });
    }


    // Select vehicle buttons
    const carButtons = document.querySelectorAll(".car button");

    carButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const carCard = this.parentElement;
            const carName = carCard.querySelector("h3").textContent;
            const fee = carCard.querySelectorAll("p")[1].textContent;

            localStorage.setItem("selectedTesla", carName);
            localStorage.setItem("deliveryFee", fee);

            alert(
                carName + " selected!\n" + fee
            );

        });

    });


    // Testimonial popup
    const messages = [
        "⭐ New customer update available",
        "🚗 Vehicle delivery update added",
        "⚡ Electric vehicle community update",
        "🌎 New Tesla information available"
    ];

    let count = 0;

    setInterval(function(){

        console.log(messages[count]);

        count++;

        if(count >= messages.length){
            count = 0;
        }

    },5000);


});
