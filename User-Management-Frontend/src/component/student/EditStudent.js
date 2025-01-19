import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
        const navigate = useNavigate();

        const {id} = useParams();

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: ""
    });




    useEffect(() => {
        getOneStudent();
    },[])

    const getOneStudent = async() => {
        const response = await axios.get(`http://localhost:8080/students/${id}`);
            setStudent(response.data);
    }







    const [errorMessage, setErrorMessage] = useState(""); // Error message state
    const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state

    const { firstName, lastName, email, department } = student;

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const updateStudent = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`http://localhost:8080/students/update/${id}`, student);

            if (response.status === 200) {
                setIsPopupVisible(true); // Show popup on success
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage("There was an error updating the student.");
            }
        }
    };

    const handlePopupClose = () => {
        setIsPopupVisible(false);
    };

    const handleViewAllStudents = () => {
        setIsPopupVisible(false);
        navigate("/view-students"); // Navigate to view students page
    };

    return (
        <div className="background">
            <div className="form-container">
                <h2 className="form-title">Update Student</h2>

                {errorMessage && (
                    <div className="alert alert-danger fade-in">{errorMessage}</div>
                )}

                <form onSubmit={updateStudent} className="student-form">
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
                        <button type="submit" className="btn btn-success">Update</button>
                        <Link to="/view-students" className="btn btn-danger">Cancel</Link>
                    </div>
                </form>
            </div>

            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Update Successful</h3>
                        <p>The student has been updated successfully.</p>
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
    )
}
export default EditStudent;