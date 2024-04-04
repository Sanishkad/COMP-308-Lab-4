import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataProvider } from "./DataContext";
import StudentApp1 from "./StudentApp1/App";
import StudentApp2 from "./StudentApp2/App";
import StudentApp3 from "./StudentApp3/App";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/student-app-1">StudentApp1</Link>
            </li>
            <li>
              <Link to="/student-app-2">StudentApp2</Link>
            </li>
            <li>
              <Link to="/student-app-3">StudentApp3</Link>
            </li>
          </ul>
        </nav>

        <DataProvider>
          <Routes>
            <Route path="/" element={<StudentApp1 />} />
            <Route path="/student-app-1" element={<StudentApp1 />} />
            <Route path="/student-app-2" element={<StudentApp2 />} />
            <Route path="/student-app-3" element={<StudentApp3 />} />
          </Routes>
        </DataProvider>
      </div>
    </Router>
  );
}

export default App;
