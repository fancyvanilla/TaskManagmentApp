package Mariem.dev.TodosApp.Repository;

import Mariem.dev.TodosApp.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {

    List<User> findByUsername(String username);
    User findFirstByUsername(String username);
    List<User>findByUsernameAndPassword(String username,String password);
}
