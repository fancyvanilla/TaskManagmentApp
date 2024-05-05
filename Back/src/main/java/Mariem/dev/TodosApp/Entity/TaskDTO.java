package Mariem.dev.TodosApp.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class TaskDTO {
    private Long id;
    private Long userId;
    private String text;
    private Date dueDate;
    private boolean done;
    private String category;
}