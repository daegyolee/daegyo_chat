package kr.ethree.co.daegyo.chat.service;

import java.util.List;

import kr.ethree.co.daegyo.chat.model.chatMessage;

public interface chatMessageService {
     chatMessage saveMessage(chatMessage message);
     List<chatMessage> getAllMessages();
}
