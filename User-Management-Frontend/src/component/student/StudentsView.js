import React, {useEffect, useState} from 'react'
import axios from "axios";
import {FaTrashAlt} from "react-icons/fa";
import {Link} from "react-router-dom";

const StudentsView = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        getallStudents();
    },[])

    const getallStudents = async() => {
        const response = await axios.get("http://localhost:8080/students/all",
            {
                validateStatus: () => {
                    return true;
        }
        }
        );

                if(response.status === 302) {
                    setStudents(response.data)
                }
                 }


    return (
        <section>
         <table className="table table-bordered table-hover">
             <thead>
             <tr className="text-center">
                 <th>ID</th>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th> Email </th>
                 <th>Department</th>
                 <th colSpan="3">Actions</th>
             </tr>
             </thead>

             <tbody className="text-center ">
             {students.map((student, index) => (
                 <tr key={student.id}>
                     <th scope="row" key={index}>
                         {index + 1}
                     </th>
                     <td>{student.firstName}</td>
                     <td>{student.lastName}</td>
                     <td>{student.email}</td>
                     <td>{student.department}</td>
                     <td className="mx-2 ">
                         <button className="btn btn-info " type="button">
                             View
                         </button>
                         </td>
                     <td className="mx-2 ">

                         <Link to={"/update-student"} className="btn btn-warning " type="button">
                             Update
                         </Link>
                     </td>
                     <td className="mx-2 ">
                         <button className="btn btn-danger " type="button">
                             <FaTrashAlt />
                         </button>
                     </td>
                 </tr>

             ))}
             </tbody>
         </table>
        </section>

    )
}

export default StudentsView;
