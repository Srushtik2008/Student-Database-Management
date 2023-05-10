package com.app.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;

import com.app.demo.model.Student;
import com.app.demo.repository.StudentRepo;
import com.app.demo.service.LoginService;

@CrossOrigin
@RequestMapping("/home")
@Controller
public class LoginController {
	
	@Autowired
	LoginService loginservice;
	
	@Autowired
    private StudentRepo studentRepository;
	
	@PostMapping("/students") 
	  public ResponseEntity<?> StudentRegistration(@RequestBody Student student) {

		//System.out.println("hello");
		return loginservice.saveStudent(student);
	}
	
	@PostMapping("/studentlogin") 
	public ResponseEntity<Student> StudentLogin(@RequestBody Student student ) {

		return loginservice.validateStudent(student); 
	  }
	@GetMapping("/allstudents")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return ResponseEntity.ok(students);
    }
	
	@GetMapping("/above80")
    public ResponseEntity<List<Student>> getHighMarksStudents() {
        List<Student> students = studentRepository.findByMarks(80);
        return ResponseEntity.ok(students);
    }
	
	

}