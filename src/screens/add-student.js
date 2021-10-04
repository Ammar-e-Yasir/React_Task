import React from "react";
import { GlobalContext } from "../context/context";
import { useContext,useState } from "react";

let labelStyle = {display:'inline-block',width:'140px'};
let spanStyle = {display:'block',backgroundColor:'pink',color:'red',margin:'5px 0px'}

export default function AddStudents(){

    const { state, dispatch } = useContext(GlobalContext);

    function addStudent(studentData){
        console.log("newstud", studentData);
        dispatch({ type: "ADD_STUDENTS", payload: studentData });
      };

    const[studentName,setStudentName] = useState('');
    const[rollNo,setRollNo] = useState('');
    const[totalMarks,setTotalMarks] = useState('');
    const[obtainedMarks,setObtainedMarks] = useState('');
    const[feedBack,setFeedback] = useState('');

    const[studentNameErr,setStudentNameError] = useState('');
    const[rollNoErr,setRollNoError] = useState('');
    const[totalMarksErr,setTotalMarksError] = useState('');
    const[obatinedMarksErr,setObtainedMarksError] = useState('');
    const[feedBackErr,setFeedBackError] = useState('');

    return(
            <div>
                <fieldset>
                    <legend>Add Students</legend>
            <label style={labelStyle}>Student Name</label>
             <input type="text" value={studentName} onChange={(a)=>{setStudentName(a.target.value)}}  />
            <br />
            <span style={spanStyle}>{studentNameErr}</span>
            <label style={labelStyle}>Roll No </label>
            <input type="text" value={rollNo} onChange={(a)=>{setRollNo(a.target.value)}}  />
            <br />
            <span style={spanStyle}>{rollNoErr}</span>

            <label style={labelStyle}>Obtained Marks </label>
             <input type="text" value={obtainedMarks} onChange={(a)=>{setObtainedMarks(a.target.value)}}  />
             <br/>
            <span style={spanStyle}>{obatinedMarksErr}</span>

            <label style={labelStyle}>Total Marks </label>
             <input type="text" value={totalMarks} onChange={(a)=>{setTotalMarks(a.target.value)}}  />
             <br/>
            <span style={spanStyle}>{totalMarksErr}</span>


            <br />
            <label style={labelStyle} >Feedback</label> 
            <textarea value={feedBack} onChange={(a)=>{setFeedback(a.target.value)}} />
            <br/>
            <span style={spanStyle}> {feedBackErr}</span>
            
            <button onClick={()=>{
                if(studentName === ""){
                    setStudentNameError('Enter Student Name');
                    setTimeout(()=>{
                        setStudentNameError('');
                      },3000)
                }
                else if(rollNo === ""){
                    setRollNoError('Enter Roll No');
                    setTimeout(()=>{
                        setRollNoError('');
                      },3000)
                    
                }
                else if(totalMarks === ""){
                    setTotalMarksError('Enter Total Mark');
                    setTimeout(()=>{
                        setTotalMarksError('');
                      },3000)
                }
                else if(obtainedMarks === ""){
                    setObtainedMarksError('Enter Obtained Marks !');
                    setTimeout(()=>{
                        setObtainedMarksError('');
                      },3000)
                }



                else if(feedBack === ""){
                    setFeedBackError('Give  Feedback !');
                    setTimeout(()=>{
                        setFeedBackError('');
                      },3000)
                }
               
                else{
                    let studentData = {studentName,rollNo,obtainedMarks,totalMarks,feedBack }
                    addStudent(studentData)
                }
            }}>Add</button>
            </fieldset>
        </div>
    )
}