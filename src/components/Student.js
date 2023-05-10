import axios from "axios";
import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {useNavigate} from 'react-router-dom'
import { Redirect } from "react-router-dom";



function Student() {

  

  const data=[
    {
        "Name":"Nikita",
        "Marks":"98",
        
    },
    {
       "Name":"Pratiksha",
        "Marks":"96",
        
    },
    {
        "Name":"Muskan",
        "Marks":"97",
       
    },
    {
       "Name":"Nishi",
       "Marks":"95",
      
    },
    {
       "Name":"Himanshu",
      "Marks":"78",
      
    }
]
const tableRows=data.map(
    (element)=>{
        return( 
            
          <tr>
            <td>{element.Name}</td>
            <td>{element.Marks}</td>
           
          </tr>
            
        )
    }
)
  

  
  const handleAbove70=()=>{
    const data=[
      {
          "Name":"Nikita",
          "Marks":"98",
          
      },
      {
         "Name":"Pratiksha",
          "Marks":"96",
          
      },
      {
          "Name":"Muskan",
          "Marks":"97",
         
      },
      {
         "Name":"Nishi",
         "Marks":"95",
        
      }
    ]
    const tableRows=data.map(
        (element)=>{
            return( 
                
              <tr>
                <td>{element.Name}</td>
                <td>{element.Marks}</td>
               
              </tr>
                
            )
        }
    )
  }

  
  const handleAllStudents=()=>{
    const data=[
      {
          "Name":"Nikita",
          "Marks":"98",
          
      },
      {
         "Name":"Pratiksha",
          "Marks":"96",
          
      },
      {
          "Name":"Muskan",
          "Marks":"97",
         
      },
      {
         "Name":"Nishi",
         "Marks":"95",
        
      },
      {
         "Name":"Himanshu",
        "Marks":"78",
        
      }
  ]
  const tableRows=data.map(
      (element)=>{
          return( 
              
            <tr>
              <td>{element.Name}</td>
              <td>{element.Marks}</td>
             
            </tr>
              
          )
      }
  )
    
};


  return (
    <div>
 <div>
    
    
  <Button onClick={handleAllStudents}>All Students</Button>
  <table hover>
            <thead>
              <tr>    
                <th> Name</th>
                <th>Marks</th>
                
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
          </div>
  <Button onClick={handleAbove70}>Above 70</Button>
  <table hover>
            <thead>
              <tr>    
                <th> Name</th>
                <th>Marks</th>
                
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>

      

      </div>
      
    
  );
}

export default Student;