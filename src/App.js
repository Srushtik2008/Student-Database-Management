import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Student from './components/Student';
import {Route,Routes,Link} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AllStudents from './components/AllStudents';

function App() {
  return (
    <div className="App">
      <Routes>
      
      <Route exact path='/' element={<Home/>}/>

       {/* Introduction site */}

        <Route exact path="/"  component={Home} />
        <Route exact path="/register"  element={<Register/>} />
        <Route exact path="/Login"  element={<Login/>} />
        <Route exact path="/Student"  element={<Student/>} />
        {/* <Route exact path="/AllStudents"  element={<AllStudents/>} /> */}

        </Routes>
    </div>
  );
}

export default App;