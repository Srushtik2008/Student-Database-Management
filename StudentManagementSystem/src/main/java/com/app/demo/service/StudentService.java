package com.app.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.demo.model.Student;
import com.app.demo.repository.StudentRepo;

@Service
public class StudentService {
	
	@Autowired
	StudentRepo s_repo;

	public ResponseEntity<List<Student>> getAllStudents(String sname) {
		
		List<Student> studdetail = s_repo.findByName(sname);
		
		if (studdetail.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			
		} else {
			List<Student> s_detail=new ArrayList<Student>();
			
			for(Student e:studdetail) {
				
					s_detail.add(e);
				
			}
			return new ResponseEntity<>(s_detail, HttpStatus.OK);
		}
	}

}