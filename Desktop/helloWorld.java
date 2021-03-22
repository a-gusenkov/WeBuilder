import java.time.format.DateTimeFormatter;  
import java.time.LocalDateTime;
public class helloWorld {

    public static void main(String[] args) {
        // Prints "Hello, World" to the terminal window.
        System.out.println("Hello, World");

        DateTimeFormatter dateTimeForm = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
   		LocalDateTime now = LocalDateTime.now();  
   		System.out.println(dateTimeForm.format(now));  


    }

}