import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import { Dashboard } from "./dashboard/dashboard";
import MainDashboard from "./dashboard/NewDashboard";



function App() {
  return (
    <Router>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboards" element={<MainDashboard/>}/>

      </Routes>
   
    </Router>
  );
}

export default App;