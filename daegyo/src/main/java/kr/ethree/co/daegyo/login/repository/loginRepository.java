package kr.ethree.co.daegyo.login.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import kr.ethree.co.daegyo.login.model.User;

public interface  loginRepository  extends JpaRepository<User, Long>{
    User findByUsername(String username);
}
