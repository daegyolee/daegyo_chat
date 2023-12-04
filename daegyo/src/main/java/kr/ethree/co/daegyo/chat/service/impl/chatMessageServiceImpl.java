package kr.ethree.co.daegyo.chat.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ethree.co.daegyo.chat.model.chatMessage;
import kr.ethree.co.daegyo.chat.repository.chatMessageRepository;
import kr.ethree.co.daegyo.chat.service.chatMessageService;

@Service
public class chatMessageServiceImpl implements chatMessageService{
    @Autowired
    private chatMessageRepository repository;

    @Override
    public chatMessage saveMessage(chatMessage message) {
        return repository.save(message);
    }

    @Override
    public List<chatMessage> getAllMessages() {
        return repository.findAll();
    }
}
