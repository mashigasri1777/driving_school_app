import { useState } from "react";
import "./LLRApplication.css";

function LLRApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    applicationNumber: "",
    applicationDate: "",
    vehicleType: "two-wheeler",
  });

  const [submitted, setSubmitted] = useState(false);

  const calculateTestDate = (appDate) => {
    if (!appDate) return "";
    const date = new Date(appDate);
    date.setDate(date.getDate() + 30);
    return date.toISOString().split("T")[0];
  };

  const testDate = calculateTestDate(formData.applicationDate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.fullName &&
      formData.mobileNumber &&
      formData.applicationNumber &&
      formData.applicationDate
    ) {
      console.log("Form submitted:", {
        ...formData,
        testDate,
      });
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          fullName: "",
          mobileNumber: "",
          applicationNumber: "",
          applicationDate: "",
          vehicleType: "two-wheeler",
        });
        setSubmitted(false);
      }, 2000);
    } else {
      alert("Please fill all required fields");
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
      applicationNumber: "",
      applicationDate: "",
      vehicleType: "two-wheeler",
    });
  };

  return (
    <div className="llr-application">
      <div className="llr-card">
        <div className="llr-header">
          <div className="llr-icon">📋</div>
          <h2>LLR Application Form</h2>
          <p>Apply for your Learning License</p>
        </div>

        {submitted && (
          <div className="success-message">
            ✓ Application submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="llr-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber">
                Mobile Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter your mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="applicationNumber">
                Application Number <span className="required">*</span>
              </label>
              <input
                type="text"
                id="applicationNumber"
                name="applicationNumber"
                placeholder="Enter application number"
                value={formData.applicationNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicleType">
                Vehicle Type <span className="required">*</span>
              </label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
              >
                <option value="two-wheeler">Two Wheeler</option>
                <option value="four-wheeler">Four Wheeler</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="applicationDate">
                Application Date <span className="required">*</span>
              </label>
              <input
                type="date"
                id="applicationDate"
                name="applicationDate"
                value={formData.applicationDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="testDate">Test Date</label>
              <input
                type="date"
                id="testDate"
                value={testDate}
                readOnly
                disabled
              />
            </div>
          </div>

          <div className="info-box">
            <span className="info-icon">ℹ️</span>
            <div>
              <strong>Test Date Information</strong>
              <p>Your test date will be automatically calculated as 30 days from the application date</p>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              ✓ Submit Application
            </button>
            <button type="button" className="btn-reset" onClick={handleReset}>
              ↻ Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LLRApplication;
