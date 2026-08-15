from flask import Flask, render_template, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load trained model
model = joblib.load("model/house_price_model.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    # Create dataframe with the same column names
    input_data = pd.DataFrame([{
        "POSTED_BY": data["POSTED_BY"],
        "UNDER_CONSTRUCTION": int(data["UNDER_CONSTRUCTION"]),
        "RERA": int(data["RERA"]),
        "BHK_NO.": int(data["BHK_NO."]),
        "BHK_OR_RK": data["BHK_OR_RK"],
        "SQUARE_FT": float(data["SQUARE_FT"]),
        "READY_TO_MOVE": int(data["READY_TO_MOVE"]),
        "RESALE": int(data["RESALE"]),
        "LONGITUDE": float(data["LONGITUDE"]),
        "LATITUDE": float(data["LATITUDE"]),
        "CITY": data["CITY"]
    }])

    # Prediction
    prediction = model.predict(input_data)[0]

    return jsonify({
        "price": round(float(prediction), 2)
    })


if __name__ == "__main__":
    app.run(debug=True)