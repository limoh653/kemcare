from app import create_app

# Create the Flask app using the factory
app = create_app()

if __name__ == "__main__":
    # Run the app on port 5000
    app.run(debug=True, port=5000)
