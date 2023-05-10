package com.app.demo.model;

//import org.springframework.data.annotation.Id;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name="student")
public class Student {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="s_id")
	private int s_id;
	@Column(name="password",nullable=false)
	private String password;
	@Column(name="s_name",nullable=false)
	private String s_name;
	@Column(name="s_marks")
	private int s_marks;
	@Column(name="s_address",nullable=false)
	private String s_address;
	@Column(name="s_collegename",nullable=false)
	private String s_collegename;
	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(int s_id, String password, String s_name, int s_marks, String s_address, String s_collegename) {
		super();
		this.s_id = s_id;
		this.password = password;
		this.s_name = s_name;
		this.s_marks = s_marks;
		this.s_address = s_address;
		this.s_collegename = s_collegename;
	}

	public int getS_id() {
		return s_id;
	}

	public void setS_id(int s_id) {
		this.s_id = s_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getS_name() {
		return s_name;
	}

	public void setS_name(String s_name) {
		this.s_name = s_name;
	}

	public int getS_marks() {
		return s_marks;
	}

	public void setS_marks(int s_marks) {
		this.s_marks = s_marks;
	}

	public String getS_address() {
		return s_address;
	}

	public void setS_address(String s_address) {
		this.s_address = s_address;
	}

	public String getS_collegename() {
		return s_collegename;
	}

	public void setS_collegename(String s_collegename) {
		this.s_collegename = s_collegename;
	}

	@Override
	public String toString() {
		return "Student [s_id=" + s_id + ", password=" + password + ", s_name=" + s_name + ", s_marks=" + s_marks
				+ ", s_address=" + s_address + ", s_collegename=" + s_collegename + "]";
	}

	
	
	
	

}