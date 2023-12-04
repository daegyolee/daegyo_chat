package kr.ethree.co.daegyo.chat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kr.ethree.co.daegyo.chat.model.chatMessage;
@Repository
public interface  chatMessageRepository extends JpaRepository<chatMessage, Long>{
    
}
