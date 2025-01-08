package kttech.UserManagement.service;

import kttech.UserManagement.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {

    Student addStudent(Student student);

    List<Student> getAllStudents();

    Student getStudentById(Long id);

    Student updateStudent(Student student, Long id);

    void deleteStudent(Long id);


}
