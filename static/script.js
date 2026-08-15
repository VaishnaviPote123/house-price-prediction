const form = document.getElementById("predictionForm");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const loading = document.getElementById("loading");
    const result = document.getElementById("result");
    const price = document.getElementById("price");

    // Show loading
    loading.style.display = "block";
    result.style.display = "none";

    // Collect form data
    const data = {
        POSTED_BY: document.getElementById("posted_by").value,

        UNDER_CONSTRUCTION:
            document.getElementById("under_construction").value,

        RERA:
            document.getElementById("rera").value,

        "BHK_NO.":
            document.getElementById("bhk").value,

        BHK_OR_RK:
            document.getElementById("bhk_or_rk").value,

        SQUARE_FT:
            document.getElementById("square_ft").value,

        READY_TO_MOVE:
            document.getElementById("ready_to_move").value,

        RESALE:
            document.getElementById("resale").value,

        LONGITUDE:
            document.getElementById("longitude").value,

        LATITUDE:
            document.getElementById("latitude").value,

        CITY:
            document.getElementById("city").value
    };

    try {

        // Send data to Flask
        const response = await fetch("/predict", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        });

        // Check server response
        if (!response.ok) {
            throw new Error("Server error");
        }

        const resultData = await response.json();

        // Hide loading
        loading.style.display = "none";

        // Display predicted price
        price.textContent =
            "₹ " + Number(resultData.price).toFixed(2) + " Lakhs";

        result.style.display = "block";

    } catch (error) {

        loading.style.display = "none";

        alert(
            "Unable to predict the price. Please check that the Flask server is running."
        );

        console.error("Prediction error:", error);
    }
});