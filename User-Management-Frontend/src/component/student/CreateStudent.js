import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

            if (response.status === 201) {
                navigate("/view-students");
            }
        } catch (error) {
            // Check if the error response is available and set the error message from the backend
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                // Set a fallback error message if no specific error is available
                setErrorMessage("There was an error creating the student.");
            }
        }
    };

    return (
        <div className="col-sm-5 py-2 px-5 mt-5 offset-3 shadow rounded">
            <form onSubmit={createStudent}>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        name="firstName"
                        id="firstName"
                        type="text"
                        placeholder="First Name....."
                        required
                        value={firstName}
                        onChange={handleSubmit}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        name="lastName"
                        id="lastName"
                        type="text"
                        placeholder="Last Name....."
                        required
                        value={lastName}
                        onChange={handleSubmit}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="form-control col-sm-6"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Enter Your Email Address...."
                        required
                        value={email}
                        onChange={handleSubmit}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="department">
                        Department
                    </label>
                    <input
                        className="form-control col-sm-6"
                        id="department"
                        name="department"
                        type="text"
                        placeholder="Enter your department...."
                        required
                        value={department}
                        onChange={handleSubmit}
                    />
                </div>

                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-outline-success btn-lg">
                            Save
                        </button>
                    </div>

                    <div className="col-sm-2">
                        <Link to="/view-students" className="btn btn-outline-danger btn-lg">
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateStudent;
