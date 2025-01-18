import React, {useEffect, useState} from 'react'
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";
import {Link} from "react-router-dom";

const StudentsView = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        getAllStudents();
    },[])

    const getAllStudents = async() => {
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

      const handleDelete = async (id) => {
         await axios.delete(`http://localhost:8080/students/delete/${id}`)
          await getAllStudents();
      }


    return (
        <section>
         <table className="table table-bordered table-hover shadow">
             <thead>
             <tr className="text-center">
                 <th>Index No</th>
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
                         {/* Action button: View*/}
                         <Link to={`/student-profile/${student.id}`} className="btn btn-info " type="button">
                             <FaEye />
                         </Link>
                         </td>

                     <td className="mx-2 ">
                         {/* Action button: Edit*/}
                         <Link
                             to={`/update-students/${student.id}`}
                             className="btn btn-warning "
                             type="button"

                         >
                             <FaEdit />
                         </Link>
                     </td>

                     <td className="mx-2 ">
                         {/* Action button: Delete*/}
                         <button
                             className="btn btn-danger"
                             type="button"
                             onClick={() =>handleDelete(student.id)}>
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
