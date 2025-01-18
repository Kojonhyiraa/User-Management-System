import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateStudent.css";

const CreateStudent = () => {
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: ""
    });
    const [errorMessage, setErrorMessage] = useState(""); // Error message state
    const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state

    const { firstName, lastName, email, department } = student;

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const createStudent = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/students/add", student);

            if (response.status === 201) {
                setIsPopupVisible(true); // Show popup on success
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage("There was an error creating the student.");
            }
        }
    };

    const handlePopupClose = () => {
        setIsPopupVisible(false);
        setStudent({
            firstName: "",
            lastName: "",
            email: "",
            department: ""
        }); // Reset the student inputs
    };

    const handleViewAllStudents = () => {
        setIsPopupVisible(false);
        navigate("/view-students"); // Navigate to view students page
    };

    return (
        <div className="background">
            <div className="form-container">
                <h2 className="form-title">Create New Student</h2>

                {errorMessage && (
                    <div className="alert alert-danger fade-in">{errorMessage}</div>
                )}

                <form onSubmit={createStudent} className="student-form">
                    <div className="form-group">
                        <label htmlFor="firstName"><b>First Name</b></label>
                        <input
                            className="form-control"
                            name="firstName"
                            id="firstName"
                            type="text"
                            placeholder="First Name..."
                            required
                            value={firstName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName"><b>Last Name</b></label>
                        <input
                            className="form-control"
                            name="lastName"
                            id="lastName"
                            type="text"
                            placeholder="Last Name..."
                            required
                            value={lastName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"><b>Email Address</b></label>
                        <input
                            className="form-control"
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Enter Your Email Address..."
                            required
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="department"><b>Department</b></label>
                        <input
                            className="form-control"
                            name="department"
                            id="department"
                            type="text"
                            placeholder="Enter Your Department..."
                            required
                            value={department}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="button-group">
                        <button type="submit" className="btn btn-success">Save</button>
                        <Link to="/view-students" className="btn btn-danger">Cancel</Link>
                    </div>
                </form>
            </div>

            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Student Created Successfully!</h3>
                        <p>The student has been added to the database.</p>
                        <div className="popup-buttons">
                            <button
                                className="btn btn-danger"
                                onClick={handlePopupClose}
                            >
                                Close
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleViewAllStudents}
                            >
                                View All Students
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateStudent;
