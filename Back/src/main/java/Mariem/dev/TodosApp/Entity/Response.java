package Mariem.dev.TodosApp.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Response {
    private String message ;
    private Boolean status;
    private Long user;
    private String token;

    public Response(String s, boolean b) {
        setMessage(s);
        setStatus(b);
    }
}
