import React, { useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function Register() 
{
  const[s_name,setName]=useState('')
  const[s_collegename,setCollegename]=useState('')
  const[s_id,setId]=useState('')
  const[password,setPassword]=useState('')
  const[s_marks,setMarks]=useState('')
  const[s_address,setAddress]=useState('')
  const navigate=useNavigate();
  
  const handleClick=(e)=>{
    e.preventDefault()
    // setName({ ...s_name, [e.target.name]: e.target.value })
    // setCollege({ ...s_college, [e.target.name]: e.target.value })
    // setId({ ...s_id, [e.target.name]: e.target.value })
    // setPassword({ ...s_password, [e.target.name]: e.target.value })
    // setMarks({ ...s_marks, [e.target.name]: e.target.value })
    // setAddress({ ...s_address, [e.target.name]: e.target.value })
    //const student = {s_name,s_college,s_id,s_password,s_marks,s_address}
    //console.log(student);
    axios.post("http://localhost:8080/home/students",{ s_name,password,s_address,s_collegename,s_id,s_marks})
      .then(response=>{
        const stud=response.data
       navigate("/studentlogin",{state:{stud}});
      //window.location.href = "/login";
      console.log("new student added")
    }).catch(error=> {console.log(error);})
  } 

  return (
    <div>
      <Form>
          <h1>Student Register</h1>
          <FormGroup>
   
    <Input
      id="s_name"
      name="s_name"
      placeholder="Student Name"
      value={s_name}
      onChange={(e)=>setName(e.target.value)}
      
    />
  </FormGroup>
  
  <FormGroup>
   
    <Input
      id="s_collegename"
      name="s_collegename"
      placeholder="College Name"
      value={s_collegename}
      onChange={(e)=>setCollegename(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    
    <Input
      id="s_id"
      name="s_id"
      placeholder="Student Id"
      value={s_id}
      onChange={(e)=>setId(e.target.value)}
    />

  </FormGroup>
  <FormGroup>
   
    <Input
      id="password"
      name="password"
      placeholder="Set Password"
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    
    {/* <Input
      id="spassword"
      name="spassword"
      placeholder="Confirm password"
      type="password"
      // value={spassword}
      // onChange={(e)=>setSPassword(e.target.value)}
    /> */}
  </FormGroup>
  <FormGroup>
   
   <Input
     id="s_marks"
     name="s_marks"
     placeholder="Marks Obtained"
     value={s_marks}
      onChange={(e)=>setMarks(e.target.value)}
   />
 </FormGroup>
  
  
  <FormGroup>
   
    <Input
      id="s_address"
      name="s_address"
      type="textarea"
      placeholder="Address"
      value={s_address}
      onChange={(e)=>setAddress(e.target.value)}
    />
  </FormGroup>
  
  
    
   
 

  <Button 
  onClick={handleClick}
  >
    Submit
  </Button>
</Form>

    </div>
  )
}