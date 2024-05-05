package Mariem.dev.TodosApp.Errors;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.CONFLICT)

public class UserRegistered  extends RuntimeException{

   public UserRegistered(String message)
    {
        super(message);
    }
}

