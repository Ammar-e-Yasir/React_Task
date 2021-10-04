import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
// import FreeAPI from '../screens/free-api';
import AnimalAPI from '../screens/animal-api-name';
import Snacks from '../screens/snacks';
import SignUp from "../screens/sign-up";
import SignIn from "../screens/sign-in";
import AddStudents from "../screens/add-student";
import AllStudents from "../screens/all-students";
import StudentHome from "../screens/student-home";
export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/animal-api">
                        <AnimalAPI />
                    </Route>
                    <Route path="/snacks">
                        <Snacks />
                    </Route>
                    {/* <Route path="/">
                        <FreeAPI />
                    </Route> */}
                    <Route path='/signup'>
                        <SignUp/>
                    </Route>
                    <Route path='/signin'>
                        <SignIn />
                    </Route>
                    <Route path='/addstudents'>
                        <AddStudents />
                    </Route>
                    <Route path='/allstudents'>
                        <AllStudents />
                    </Route>
                    <Route path='/studenthome'>
                        <StudentHome />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}