# 🏠 House Price Prediction

> Machine Learning powered web application for predicting house prices based on property details.

A complete Machine Learning + Flask web application that predicts residential property prices using features such as location, BHK, square footage, RERA status, construction status, and resale status.

## 🚀 Project Highlights

- 🤖 Machine Learning: Random Forest Regression
- 📊 Dataset: 29,451+ property records
- 🎯 R² Score: 91.33%
- 💰 MAE: ₹28.37 Lakhs
- 📉 RMSE: ₹127.18 Lakhs
- 🌐 Backend: Flask
- 🎨 Frontend: HTML, CSS & JavaScript
- 📓 Development: Python & Jupyter Notebook

## 🔄 How It Works
User Input → Web Interface → Flask Backend → Data Preprocessing → Random Forest Model → Predicted House Price

## 📌 Input Features
POSTED_BY • UNDER_CONSTRUCTION • RERA • BHK_NO. • BHK_OR_RK • SQUARE_FT • READY_TO_MOVE • RESALE • LATITUDE • LONGITUDE • CITY

Target: TARGET(PRICE_IN_LACS)
## 🏆 Model Performance

| Model | R² Score | MAE | RMSE |
|---|---:|---:|---:|
| Linear Regression | 77.27% | ₹60.99 L | ₹205.94 L |
| Random Forest 🏆 | 91.33% | ₹28.37 L | ₹127.18 L |

Random Forest provided significantly better predictions than Linear Regression.

## 🛠️ Tech Stack

Python • Pandas • NumPy • Scikit-learn • Flask • HTML5 • CSS3 • JavaScript • Jupyter Notebook • Git • GitHub

## ⚡ Run Locally

1. Clone the repository:

git clone https://github.com/VaishnaviPote123/house-price-prediction.git

2. Open the project:

cd house-price-prediction

3. Create a virtual environment:

python -m venv .venv

4. Activate the environment:

.venv\Scripts\activate

5. Install dependencies:

pip install -r requirements.txt

6. Open house_price_prediction.ipynb and run the notebook to train the model and generate the required .pkl file.

7. Start the Flask application:

python app.py

8. Open in your browser:

http://127.0.0.1:5000

## ⚠️ Model File

The trained .pkl model is not included in this repository because it is approximately 185 MB, exceeding GitHub's standard 100 MB file limit.

## 🔮 Future Enhancements

- Interactive property maps
- Automatic location detection
- Advanced hyperparameter tuning
- XGBoost model comparison
- Cloud deployment
- Property recommendation system

  Screenshot
  <img width="1883" height="952" alt="house" src="https://github.com/user-attachments/assets/e2875448-ba91-42d1-bfa0-aedc5183bd01" />


## 👩‍💻 Author
Vaishnavi Pote  
GitHub: https://github.com/VaishnaviPote123
