
import './App.css';
import StudentsView from "./component/student/StudentsView";
import CreateStudent from "./component/student/CreateStudent"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import NavBar from "./component/common/NavBar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import EditStudent from "./component/student/EditStudent";
import StudentProfile from "./component/student/StudentProfile";


function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
            <Routes>
               <Route
                   exact
                   path="/"
                   element={<Home />}></Route>


                <Route
                    exact
                    path="/student-profile/:id"
                    element={<StudentProfile />}></Route>


                <Route
                    exact
                    path="/view-students"
                    element={<StudentsView />}></Route>

                <Route
                    exact
                    path="/add-students"
                    element={<CreateStudent />}></Route>

                <Route
                    exact
                    path="/update-students/:id"
                    element={<EditStudent />}></Route>
            </Routes>
        </Router>


    </div>
  );
}

export default App;
