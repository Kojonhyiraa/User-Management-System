package kttech.UserManagement.service.impl;

import kttech.UserManagement.exception.StudentAlreadyExistsException;
import kttech.UserManagement.exception.StudentNotFoundException;
import kttech.UserManagement.model.Student;
import kttech.UserManagement.repository.StudentRepository;
import kttech.UserManagement.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@RequiredArgsConstructor
@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;


    @Override
    public Student addStudent(Student student) {
        if(studentAlreadyExists(student.getEmail())){
            throw new StudentAlreadyExistsException(student.getEmail()+" already exists");
        }
        return studentRepository.save(student);
    }



    @Override
    public List<Student> getAllStudents() {
        return List.of();
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElseThrow(() -> new StudentNotFoundException("Sorry, no student found with Id:"+id));
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        //Check if user exists and then update values
        return studentRepository.findById(id).map(st ->{
            st.setFirstName(student.getFirstName());
            st.setLastName(student.getLastName());
            st.setEmail(student.getEmail());
            st.setDepartment(student.getDepartment());
            return studentRepository.save(st);

        }).orElseThrow(() -> new StudentNotFoundException("Sorry, this student could not be found") );
    }

    @Override
    public void deleteStudent(Long id) {
        //Check if student exists
        if(!studentRepository.existsById(id)){
            throw new StudentNotFoundException("Sorry, this student could not be found");
        }
        studentRepository.deleteById(id);
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }
}
