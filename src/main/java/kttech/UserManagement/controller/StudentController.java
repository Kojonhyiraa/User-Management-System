package kttech.UserManagement.controller;


import kttech.UserManagement.model.Student;
import kttech.UserManagement.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @GetMapping("/all")
    public ResponseEntity<List<Student>> getAllStudents() {
        return new ResponseEntity<>(studentService.getAllStudents(),HttpStatus.FOUND);
    }

    @PostMapping("/add") //Check the Response Entity
    public ResponseEntity<Student> addStudent(
            @RequestBody Student student
            ){
        return new ResponseEntity<>(studentService.addStudent(student),HttpStatus.CREATED);
    }


    @PatchMapping("/update/{id}")
    public ResponseEntity<Student> updateStudent(
            @RequestBody Student student,
            @PathVariable(name = "id") Long id
    ){
        return new ResponseEntity<>(studentService.updateStudent(student,id ),HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(
            @PathVariable(name = "id") Long id) {
        return new ResponseEntity<>(studentService.getStudentById(id),HttpStatus.OK);
    }


    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable(name = "id") Long id) {
        //deleting student
        studentService.deleteStudent(id);
        //return body
        return new ResponseEntity<>("Student has been deleted successfully", HttpStatus.OK);
    }








    }
