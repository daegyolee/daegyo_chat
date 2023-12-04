package kr.ethree.co.daegyo.chat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.ethree.co.daegyo.chat.model.chatMessage;
import kr.ethree.co.daegyo.chat.service.chatMessageService;

@RestController 
public class chatController {
    @Autowired
    private chatMessageService chatMessageService;

    @MessageMapping("/chat/send")
    @SendTo("/topic/messages")
    public chatMessage sendMessage(chatMessage message) {
        chatMessage savedMessage = chatMessageService.saveMessage(message);
        return savedMessage;
    }

    @GetMapping("/api/messages")
    public List<chatMessage> getAllMessages() {
        return chatMessageService.getAllMessages();
    }
}