package kr.ethree.co.daegyo.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ethree.co.daegyo.login.model.User;
import kr.ethree.co.daegyo.login.repository.loginRepository;

@Service
public class loginServiceImpl implements loginServcie {

    @Autowired
    private loginRepository loginRepository;

    @Override
    public boolean authenticate(String username, String password) {
        User user = loginRepository.findByUsername(username);
        if (user != null) {
            user.getPassword().equals(password);
            return user.getPassword().equals(password);
        }
        return false;
    }
}