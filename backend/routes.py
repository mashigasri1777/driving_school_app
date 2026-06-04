from flask import Blueprint, request, jsonify
from models import db, Student

api = Blueprint("api", __name__)

@api.route("/students", methods=["GET"])
def get_students():
    students = Student.query.all()
    return jsonify([s.to_dict() for s in students])

@api.route("/students", methods=["POST"])
def add_student():
    data = request.json

    student = Student(
        name=data["name"],
        phone=data["phone"],
        email=data["email"],
        address=data["address"],
        course=data["course"],
        fee=data["fee"],
        paid=data["paid"]
    )

    db.session.add(student)
    db.session.commit()

    return jsonify(student.to_dict())

@api.route("/students/<int:id>", methods=["DELETE"])
def delete_student(id):
    student = Student.query.get_or_404(id)

    db.session.delete(student)
    db.session.commit()

    return jsonify({"message": "Deleted"})
