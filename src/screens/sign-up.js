import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { GlobalContext } from "../context/context";

function SignUp() {
    const {state , dispatch} = useContext(GlobalContext);
    const [username, setUserName] = useState('');
    const [email, setUserEmail] = useState('');
    const [password, setUserpass] = useState('');
    const [role, setRole] = useState('');
    const[userNameErr , setUserNameError] = useState('');
    const[emailErr , setEmailError] = useState('');
    const[passErr , setPasswordError] = useState('');

    
    
    
    function registerUser(userData){
        // console.log('UserData : ' , userData)
        dispatch({type:'REGISTER_USER', payload: userData});
        console.log('Register Successfully !')

    }
   

    return (
        <div>
            <fieldset>
                <legend>User Data </legend>
                <label style={{display:'inline-block',width:'80px'}}>Username</label>
                <input type='text'  value={username} onChange={(e) => { setUserName(e.target.value) }} />
                <br />
                <span style={{display:'block',backgroundColor:'pink',color:'red',margin:'5px 0px'}}>{userNameErr}</span>

                
                <label style={{display:'inline-block',width:'80px'}}>Email</label>
                <input type='email' value={email} onChange={(e) => { setUserEmail(e.target.value) }} />
                <br />
                <span style={{display:'block',backgroundColor:'pink',color:'red',margin:'5px 0px'}}>{emailErr}</span>

                <label style={{display:'inline-block',width:'80px'}}>Password</label>
                <input type='password' value={password} onChange={(e) => { setUserpass(e.target.value) }} />


                <br />
                <span style={{display:'block',backgroundColor:'pink',color:'red',margin:'5px 0px'}}>{passErr}</span>

                <span style={{display:'inline-block',width:'80px'}}>Role</span>
                    <input type='radio' name='gender' onClick={()=>{setRole('Trainer')}} value={role}  />Trainer
                    <input type='radio' name='gender' onClick={()=>{setRole('Students')}} value={role} />Students
                <br/>
                <button  onClick={()=>{
                    // console.log(username,email,password,role);
                    if(username === ""){
                        setUserNameError('Enter your name !');
                        setTimeout(()=>{
                          setUserNameError('');
                        },3000)
                    }
                    else if(email === ""){
                        setEmailError('Enter your email !');
                        setTimeout(()=>{
                            setEmailError('');
                          },3000)
                    }
                    else if(password === ""){
                        setPasswordError('Enter your Password !');
                        setTimeout(()=>{
                            setPasswordError('');
                          },3000)
                    }
                    else if (email !== "" && password !== "" && username !== ""){                    
                   
                    let userData = {
                        name : username,
                        email:email,
                        pass:password,
                        role:role
                    }

                    registerUser(userData);

                    
                    }







                }}>Register</button>
            </fieldset>
        </div>
    )

}


export default SignUp;