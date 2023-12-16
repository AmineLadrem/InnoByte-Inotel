import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";

const Chatbot = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello there",
      sender: "chatgpt",
      direction: "outgoing",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);
    await processMessage(newMessages);
  };

  const processMessage = async (chatMessages) => {
    console.log(chatMessages[0]);

    try {
      const response = await fetch(
        "https://general-runtime.voiceflow.com/state/user/user_123/interact",
        {
          method: "POST",
          headers: {
            Authorization: "VF.DM.657bbdfba3699f00077f7a65.lNYJPYpSMCXFAF90",
          },
          data: {
            action: {
              type: "text",
              payload: chatMessages[0].message,
            },
          },
        }
      );
      console.log(response);

      const data = await response.json();
      console.log(data);
    //   setMessages([
    //     ...chatMessages,
    //     {
    //       message: data.choices[0].message.content,
    //       sender: "chatgpt",
    //       direction: "incoming",
    //     },
    //   ]);
      setTyping(false);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="w-96 h-96 bg-red-800">
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              typing ? <TypingIndicator content="The bot is typing" /> : null
            }
          >
            {messages.map((message, i) => (
              <Message key={i} model={message} />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={handleSend}
          ></MessageInput>
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chatbot;
