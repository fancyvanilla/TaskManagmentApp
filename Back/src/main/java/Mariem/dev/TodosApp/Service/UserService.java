package Mariem.dev.TodosApp.Service;

import Mariem.dev.TodosApp.Entity.*;
import Mariem.dev.TodosApp.Errors.UserNotFound;
import Mariem.dev.TodosApp.Errors.UserRegistered;
import Mariem.dev.TodosApp.Repository.UserRepository;
import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
@AllArgsConstructor

public class UserService {

    private JwtService jwtService;

    private UserRepository userRepository;

    public User getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFound("User with given id not found!"));
        return user;
    }


    public Response login(User user) {
        List<User> users = userRepository.findByUsername(user.getUsername());
        if (users.isEmpty())
            return new Response("Username doesn't exist", false);
         else {
            List<User> users2 = userRepository.findByUsernameAndPassword(user.getUsername(),user.getPassword());
            if (users2.isEmpty()) return new Response("Password is incorrect", false);
            else return new Response("Login succeeded", true,users2.getFirst().getId(),jwtService.createToken(users2.getFirst().getId().toString()));
        }
    }

    public  User signUp(User user)
    {
        if (login(user).getStatus()) throw new UserRegistered("User already registered!");
        return userRepository.save(user);
    }



    public List <Task> getTasksById (Long id)
    {
        User user=getUserById(id);
        return user.getTasks();
    }

    public Response addTask(TaskDTO task)
    {
        User user=getUserById(task.getUserId());
        user.getTasks().add(new Task(user,task.getText(),task.getDueDate(),task.getCategory()));
        userRepository.save(user);
        return new Response("Task added successfully",true);
    }


    public Response deleteTask(Long userId,Long taskId)
    {
        User user =getUserById(userId);
        List<Task> tasks= user.getTasks();
        Task taskToRemove=null;
        for(Task task:tasks)
        {
            if (task.getId().equals(taskId))
            {
                taskToRemove=task;
                break;
            }
        }
        if(taskToRemove!=null)
        {
            tasks.remove(taskToRemove);
            userRepository.save(user);
            return new Response("Task deleted successfully",true);
        }
        else return new Response("Task not found",false);
    }

    public Response updateTask(TaskDTO task )
    {
        User user =getUserById(task.getUserId());
        user.getTasks().add(new Task(user,task.getText(),task.getId(),task.isDone(),task.getDueDate(),task.getCategory()));
        userRepository.save(user);
        return new Response("Task updated successfully",true);
    }

    public Response Auth(AuthDTO auth) {
      return jwtService.validateToken(auth);
    }
}