import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './CreateStudent.css';  // Custom CSS file for animations and transitions

const CreateStudent = () => {
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: ""
    });
    const [errorMessage, setErrorMessage] = useState(""); // State to store error message
    const { firstName, lastName, email, department } = student;

    const handleSubmit = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const createStudent = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/students/add", student);

            if (response.status === 200) {
                navigate("/view-students");
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage("There was an error creating the student.");
            }
        }
    };

    return (
        <div className="background">
            <div className="form-container">
                <h2 className="form-title">Create New Student</h2>

                {errorMessage && (
                    <div className="alert alert-danger fade-in">
                        {errorMessage}
                    </div>
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
                            onChange={handleSubmit}
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
                            onChange={handleSubmit}
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
                            onChange={handleSubmit}
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
                            onChange={handleSubmit}
                        />
                    </div>

                    <div className="button-group">
                        <button type="submit" className="btn btn-success">Save</button>
                        <Link to="/view-students" className="btn btn-danger">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateStudent;
