import axios from "axios";
import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {useNavigate} from 'react-router-dom'
import { Redirect } from "react-router-dom";



function Login() {

  const[s_name,setName]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate();
  

  


  
  const handleClick=()=>{
    const studentlogin = {s_name,password }
    // alert("hi")
    axios.post(`http://localhost:8080/home/studentlogin`, studentlogin).then(
        (response)=>{
           // toast.success('login successfull');
            console.log("success");
            //console.log(response);
            //const stud=response.data
            navigate("/student");
            //  window.location.href = "/students";
            localStorage.setItem('s_name',response.data.s_name)

            
        },
        (error)=>{
         
            alert("Invalid Login Details",error);
            toast.error('invalid login');
            console.log(error);
            console.log("Error");
        }
    );
};


  return (
    <div>
 
    
    <div >
      <div
        className="leftSide"
        // style={{ backgroundImage: `url(${sLogin})` }}
      >
        {/* //leftside */}
        
        </div>
      <div className="rightSide">
        <h1> Login </h1>

        <Form inline>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="s_name"
    >
      Name
    </Label>
    <Input
      id="s_name"
      name="s_name"
      placeholder="Enter Name"
      type="name"
      value={s_name}
      onChange={(e)=>setName(e.target.value)}
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="examplePassword"
    >
      Password
    </Label>
    <Input
      id="s_password"
      name="s_password"
      placeholder="Enter Password"
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    />
  </FormGroup>
  <Button
   onClick={handleClick}
  >
    Submit
  </Button>
</Form> 
      </div>
      </div>
      
    </div>
    
  );
}

export default Login;