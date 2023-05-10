import axios from 'axios';

const STUDENT = "http://localhost:8080/allstudents";


const STUDENT_LIST_API = "http://localhost:8080/above80";


const API11 = "http://localhost:8080/student";



 class AllStudents {
 
    //Students List
    getStudents(){
        const stud = axios.get(API11);
        console.log(stud);
        return stud;
    }

    
    getStudentsAbove70(s_marks){
        console.log(s_marks);
        return s_marks;
       
    }


    

    // getStudentsByMarks(s_marks){
    //     console.log(s_marks);
    //     return s_marks;
       
    // }
   

   
    //get studentslist

    // getStudents()
    // {
    //     const student = axios.get(API11);
    //     console.log(student);
    //     return student;
    // }


   
}
export default new AllStudents()