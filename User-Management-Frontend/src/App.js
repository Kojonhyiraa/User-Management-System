
import './App.css';
import StudentsView from "./component/student/StudentsView";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import NavBar from "./component/common/NavBar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <main className="mt-2">
        <Router>
            <NavBar />
            <Routes>
               <Route
                   exact
                   path="/"
                   element={<Home />}></Route>


                <Route
                    exact
                    path="/view-students"
                    element={<StudentsView />}></Route>
            </Routes>
        </Router>


    </main>
  );
}

export default App;
