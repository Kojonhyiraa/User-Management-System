import React, {useState} from "react";

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
        e.preventDefault();
    }


    return (
        <div className="col-sm-8 py-2 px-5 offset-2">
            <form>
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
                    />

                </div>

            </form>
        </div>

    )
}

export default CreateStudent;