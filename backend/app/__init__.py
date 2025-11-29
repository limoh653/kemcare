from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask_cors import CORS
from dotenv import load_dotenv
import resend
import os

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # Enable CORS for frontend on port 3000
    CORS(app, origins=["http://localhost:3000"])

    # Load environment variables from .env
    load_dotenv()

    # Initialize Resend with your API key from .env
    resend.api_key = os.getenv("RESEND_API_KEY")  # <-- use the env variable name

    # Debug print to verify API key is loaded (remove in production)
    print("Resend API Key Loaded:", resend.api_key is not None)

    # Register routes
    from .routes import bp as routes_bp
    app.register_blueprint(routes_bp)

    return app
