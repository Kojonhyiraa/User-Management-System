import React, {useState} from 'react';

const StudentProfile = () => {
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: ""
    });
    return (
        <section
        style={{ backgroundColor: "whitesmoke" }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img
                                className="rounded-circle img-fluid"
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/avatar.jpg"
                                alt="avatar"
                                style={{ width: 150 }}  />

                                <h5 className="my-3">
                                    {`${student.firstName} ${student.lastName}`}
                                </h5>

                                <div className="d-flex justify-content-center mb-2">
                                    <button
                                    className="btn btn-outline-primary"
                                    type="button">
                                        CALL
                                    </button>

                                    <button
                                    className="btn btn-outline-warning ms-1"
                                    type="button">
                                        MESSAGE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="card mb-4">
                            <div className="card-body">
                                <hr/>

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">
                                            First Name:
                                        </h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {student.firstName}
                                        </p>
                                    </div>
                                </div>

                                <hr/>

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">
                                            Last Name:
                                        </h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {student.lastName}
                                        </p>
                                    </div>
                                </div>
                                <hr/>


                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">
                                            Email
                                        </h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {student.email}
                                        </p>
                                    </div>
                                </div>
                                <hr/>




                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>

    )

}
export default StudentProfile;
