class Student(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100))
    phone = db.Column(db.String(50))
    course = db.Column(db.String(100))

    llr_applied = db.Column(db.String(10))
    llr_date = db.Column(db.String(20))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone": self.phone,
            "course": self.course,
            "llr_applied": self.llr_applied,
            "llr_date": self.llr_date
        }
