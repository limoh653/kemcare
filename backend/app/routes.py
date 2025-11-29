from flask import Blueprint, request, jsonify
from . import db
from .models import ContactMessage
import resend
import os
import traceback  # <-- import traceback for detailed error printing

bp = Blueprint("routes", __name__)

# --- Test Route ---
@bp.route("/")
def home():
    return jsonify({"message": "Backend is running"})


# --- Handle Contact Form Submission ---
@bp.route("/contact", methods=["POST"])
def handle_contact():
    data = request.get_json()

    # Debug prints to check environment variables
    print("RESEND_API_KEY:", os.getenv("RESEND_API_KEY"))
    print("TO_EMAIL:", os.getenv("TO_EMAIL"))

    # Validate required fields
    required_fields = ["name", "email", "phone", "service", "message"]
    missing = [f for f in required_fields if f not in data or not str(data[f]).strip()]

    if missing:
        return jsonify({
            "status": "error",
            "message": "Missing fields",
            "fields": missing
        }), 400

    # Save message to DB
    contact_message = ContactMessage(
        name=data["name"],
        email=data["email"],
        phone=data["phone"],
        service=data["service"],
        message=data["message"]
    )

    db.session.add(contact_message)
    db.session.commit()

    # --- Send Email using Resend ---
    try:
        resend.Emails.send({
            "from": "Website Contact <onboarding@resend.dev>",
            "to": [os.getenv("TO_EMAIL")],
            "subject": f"New Contact Form Message - {data['service']}",
            "text": f"""
New Contact Form Submission:

Name:    {data['name']}
Email:   {data['email']}
Phone:   {data['phone']}
Service: {data['service']}

Message:
{data['message']}
"""
        })

    except Exception as e:
        # Print full traceback to console for debugging
        print("Error sending email via Resend:")
        traceback.print_exc()

        # Return readable error to frontend
        return jsonify({
            "status": "warning",
            "message": "Message saved but failed to send email",
            "error": str(e)
        }), 500

    return jsonify({
        "status": "success",
        "message": "Message received and email sent",
        "data": contact_message.serialize()
    }), 201
