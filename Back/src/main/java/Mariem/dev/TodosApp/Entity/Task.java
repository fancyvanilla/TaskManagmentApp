package Mariem.dev.TodosApp.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    private User user;
    private String text;
    private Date dueDate;
    @Column(name="status")
    private boolean done;
    private String category;
    public Task(User user, String text,Date dueDate,String category) {
        this.user = user;
        this.text = text;
        this.dueDate = dueDate;
        this.category=category;
    }
    public Task(User user,String text,Long id,Boolean done,Date dueDate,String category)
    {
        this.user=user;
        this.text=text;
        this.id=id;
        this.done=done;
        this.dueDate=dueDate;
        this.category=category;
    }
}
