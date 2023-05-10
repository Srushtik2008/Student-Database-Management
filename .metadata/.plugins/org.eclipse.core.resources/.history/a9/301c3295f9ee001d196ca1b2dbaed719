package com.app.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.demo.model.Student;
import com.app.demo.repository.StudentRepo;

@Service
public class LoginService {

	@Autowired
	StudentRepo s_repo;
	
	public ResponseEntity<?> saveStudent(Student student)
	{
		try {
	
			s_repo.save(student);
			
			
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	public ResponseEntity<List<Student>> getStudentMarks(int marks) {
		
		List<Student> students = s_repo.findByMarks(marks);

		if (students.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(students, HttpStatus.OK);
		}
	}
	
	public ResponseEntity<List<Student>> getAllStudents() {
		
		List<Student> students=s_repo.findAll();
		
		if(students.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
		return new ResponseEntity<>(students, HttpStatus.OK);
	}
	
	public ResponseEntity<Student> validateStudent(Student student) {
		
		Student stud=s_repo.findByName(student.getS_name());
		
		if(stud.getS_name().equals(student.getS_name()) && stud.getPassword().equals(student.getPassword()) )
			return new ResponseEntity<>(stud,HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
