
import './App.css';
import StudentsView from "./component/student/StudentsView";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import NavBar from "./component/common/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
    <StudentsView/>
    </div>
  );
}

export default App;
