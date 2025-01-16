import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const CreateStudent = () => {
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: ""
    });
    const {firstName, lastName, email, department} = student;

    const handleSubmit = (e) => {
        setStudent({...student, [e.target.name]: e.target.value});
    }


    const createStudent = async(e) => {
        await axios.post("http://localhost:8080/students/add",student) };




    return (
        <div className="col-sm-5 py-2 px-5 mt-5 offset-3 shadow rounded ">
            <form onSubmit={(e) => createStudent(e)}>
                <div className="input-group mb-5 ">
                    <label
                        className="input-group-text "
                        htmlFor="firstName">First Name</label>

                    <input
                        className="form-control col-sm-6"
                        name="firstName"
                        id="firstName"
                        type="text"
                        placeholder="First Name....."
                        required
                        value={firstName}
                        onChange={(e) => handleSubmit(e)}
                    />

                </div>

                <div className="input-group mb-5 ">
                    <label
                        className="input-group-text "
                        htmlFor="lastName">Last Name</label>

                    <input
                        className="form-control col-sm-6"
                        name="lastName"
                        id="lastName"
                        type="text"
                        placeholder="Last Name....."
                        required
                        value={lastName}
                        onChange={(e) => handleSubmit(e)}
                    />

                </div>


                <div className="input-group mb-5 ">
                    <label
                        className="input-group-text "
                        htmlFor="email">Email Address</label>

                    <input
                        className="form-control col-sm-6"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Enter Your Email Address...."
                        required
                        value={email}
                        onChange={(e) => handleSubmit(e)}
                    />

                </div>


                <div className="input-group mb-5 ">
                    <label
                        className="input-group-text "
                        htmlFor="department">Department</label>

                    <input
                        className="form-control col-sm-6"
                        id="department"
                        name="department"
                        type="text"
                        placeholder="Enter your department...."
                        required
                        value={department}
                        onChange={(e) => handleSubmit(e)}
                    />

                </div>

                <div className="row mb-5 ">
                    <div className="col-sm-2">
                        <button
                            type="submit"
                            className="btn btn-outline-success btn-lg">
                        Save
                        </button>
                    </div>

                    <div className="col-sm-2">
                        <Link
                            to={"/view-students"}
                        type="submit"
                        className="btn btn-outline-danger btn-lg">
                            Cancel

                        </Link>
                    </div>
                </div>



            </form>
        </div>

    )
}

export default CreateStudent;