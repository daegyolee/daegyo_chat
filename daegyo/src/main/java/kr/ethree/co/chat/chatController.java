package kr.ethree.co.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import kr.ethree.co.chat.model.chatMessage;

@Controller
public class chatController {

    @MessageMapping("/chat/send")
    @SendTo("/topic/messages")
    public chatMessage sendMessage(chatMessage message) {
        return message; // 여기서 추가 로직 구현 가능
    }
}