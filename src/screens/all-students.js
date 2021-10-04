import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
import './all-students/all-students.css';


export default function AllStudents(){
    const {state , dispatch} =  useContext(GlobalContext);
    return(
        <table>
        <thead>
            <tr>
                <th>Sr#</th>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Obtained Marks</th>
                <th>Total Marks</th>
                <th>Remark</th>
            </tr>
        </thead>
        <tbody>
            {
            //   let allStudents = state.students;

                state.students.map((student, index) => (
                    <tr key={student.studentName + index}>
                        <td>{index + 1}</td>
                        <td>{student.studentName}</td>
                        <td>{student.rollNo}</td>
                        <td>{student.obtainedMarks}</td>
                        <td>{student.totalMarks}</td>
                        <td>{student.feedBack}</td>
                    </tr>
                ))
            }
        </tbody>

    </table>
    )
}