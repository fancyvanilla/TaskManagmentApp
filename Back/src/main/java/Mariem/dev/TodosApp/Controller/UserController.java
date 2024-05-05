package Mariem.dev.TodosApp.Controller;


import Mariem.dev.TodosApp.Entity.*;
import Mariem.dev.TodosApp.Service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RestController
@RequestMapping("/todoApp")
@AllArgsConstructor
@CrossOrigin("*")

public class UserController {

    private UserService userService ;

    @GetMapping("/users/{id}")
    ResponseEntity<User> getUserById(@PathVariable("id") Long id )
    {
        return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
    }


    @PostMapping("/login")
    ResponseEntity<Response> login(@RequestBody User user)
    {
        return new ResponseEntity<>(userService.login(user), HttpStatus.OK);
    }

    @PostMapping("/signup")
    ResponseEntity<User> signUp(@RequestBody User user)
    {
        return new ResponseEntity<>(userService.signUp(user), HttpStatus.OK);
    }

    @PostMapping("/addtask")
        ResponseEntity<Response> addTask(@RequestBody TaskDTO task)
        {
            return new ResponseEntity<>(userService.addTask(task), HttpStatus.OK);
        }

        @GetMapping("/tasks/{id}")
        ResponseEntity<List<Task>> getTasksById(@PathVariable("id") Long id)
        {
            return new ResponseEntity<>(userService.getTasksById(id), HttpStatus.OK);
        }
        @PostMapping("/deletetask")
                ResponseEntity<Response> deleteTask(@RequestBody DeleteTaskDTO task)
        {
            return new ResponseEntity<>(userService.deleteTask(task.getUserId(), task.getTaskId()), HttpStatus.OK);
        }

        @PostMapping("/Auth")
        ResponseEntity<Response> Auth(@RequestBody AuthDTO auth)
        {
            return new ResponseEntity<>(userService.Auth(auth), HttpStatus.OK);
        }

        @PostMapping("/updatetask")
         ResponseEntity<Response> updateTask(@RequestBody TaskDTO task)
        {
            return new ResponseEntity<>(userService.updateTask(task), HttpStatus.OK);
        }


}
