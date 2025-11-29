from app import create_app, db
from app.models import ContactMessage

# Seed data examples
seed_messages = [
    {
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "555-123-4567",
        "service": "personal-care",
        "message": "I need personal care assistance for my mother."
    },
    {
        "name": "Sarah Wilson",
        "email": "sarah@example.com",
        "phone": "555-987-6543",
        "service": "residential-cleaning",
        "message": "I'd like a deep cleaning scheduled for next Friday."
    },
    {
        "name": "Michael Brown",
        "email": "mikeb@example.com",
        "phone": "555-222-1111",
        "service": "companionship",
        "message": "Looking for companionship services for my father."
    }
]

def seed_database():
    app = create_app()  # Load your Flask application

    with app.app_context():
        print("Clearing existing data...")
        ContactMessage.query.delete()
        db.session.commit()

        print("Seeding contact messages...")

        for msg in seed_messages:
            entry = ContactMessage(
                name=msg["name"],
                email=msg["email"],
                phone=msg["phone"],
                service=msg["service"],
                message=msg["message"]
            )
            db.session.add(entry)

        db.session.commit()
        print("Database seeded successfully!")

if __name__ == "__main__":
    seed_database()
