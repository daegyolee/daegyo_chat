package kr.ethree.co.daegyo.login.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import kr.ethree.co.daegyo.login.service.loginServcie;

@RestController
public class loginController {

    @Autowired
    private loginServcie loginService;
    
    @PostMapping("/login/login.do")
    public Map<String, Boolean> login(@RequestBody UserCredentials credentials) {
         boolean isAuthenticated = loginService.authenticate(credentials.getUsername(), credentials.getPassword());
        return Collections.singletonMap("success", isAuthenticated);
    }

}

class UserCredentials {
    private String username;
    private String password;

    // getters and setters
    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
