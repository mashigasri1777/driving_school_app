import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-header">
          <h1>About Bhavan Driving School</h1>
          <p className="tagline">Your trusted partner in safe driving education</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Welcome to Bhavan Driving School</h2>
            <p>
              Bhavan Driving School has been providing quality driving education and training for over a decade. 
              We are committed to making roads safer by training responsible and skilled drivers.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To impart comprehensive driving skills and road safety awareness to students of all age groups, 
              ensuring they become confident and responsible drivers who follow traffic rules and contribute 
              to a safer community.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🏎️</div>
                <h3>Two Wheeler Training</h3>
                <p>Expert training for motorcycle and scooter riders with focus on safety and control</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🚗</div>
                <h3>Four Wheeler Training</h3>
                <p>Comprehensive car driving courses for beginners and experienced drivers</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📚</div>
                <h3>Theory Classes</h3>
                <p>In-depth knowledge of traffic rules, road signs, and safe driving practices</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🎯</div>
                <h3>Practical Training</h3>
                <p>Hands-on driving experience with qualified instructors in various traffic conditions</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Why Choose Us?</h2>
            <ul className="features-list">
              <li>✓ Experienced and certified instructors</li>
              <li>✓ Modern and well-maintained vehicles</li>
              <li>✓ Flexible training schedules</li>
              <li>✓ Affordable and transparent pricing</li>
              <li>✓ Personalized attention to each student</li>
              <li>✓ High success rate in driving tests</li>
              <li>✓ Professional student management system</li>
              <li>✓ Track LLR application deadlines</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Our Instructors</h2>
            <p>
              Our team consists of highly trained and certified driving instructors with years of experience 
              in driver education. Each instructor is dedicated to providing safe, effective, and personalized 
              training to help students become confident drivers.
            </p>
          </section>

          <section className="about-section contact-section">
            <h2>Contact Us</h2>
            <div className="contact-info">
              <div className="contact-item">
                <strong>📍 Location:</strong>
                <p>Bhavan Driving School</p>
              </div>
              <div className="contact-item">
                <strong>📞 Phone:</strong>
                <p>+91 XXXXXXXXXX</p>
              </div>
              <div className="contact-item">
                <strong>✉️ Email:</strong>
                <p>info@bhavandrivingschool.com</p>
              </div>
              <div className="contact-item">
                <strong>🕐 Hours:</strong>
                <p>Monday - Sunday: 6:00 AM - 7:00 PM</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
