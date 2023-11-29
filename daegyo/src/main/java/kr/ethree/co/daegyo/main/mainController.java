package kr.ethree.co.daegyo.main;

import java.util.Collections;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mainController {
    @CrossOrigin(origins = "http://localhost:3001")
    @GetMapping("/main/hello")
    public Map<String, String> hello() {
        return Collections.singletonMap("message", "Hello from Spring!");
    }
}
