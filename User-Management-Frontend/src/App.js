
import './App.css';
import StudentsView from "./component/student/StudentsView";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import NavBar from "./component/common/NavBar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavBar />
    <StudentsView/>
        <Router>
            <Routes>
               <Route
                   exact
                   path="/"
                   element={<Home />}></Route>


                <Route
                    exact
                    path="/"
                    element={<Home />}></Route>
            </Routes>
        </Router>


    </div>
  );
}

export default App;
