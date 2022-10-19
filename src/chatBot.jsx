import { React,useState} from "react";
import sendImg from "./images/icons8-send-25.png";
import "./chatBot.css";

export default function ChatBot() {
  const chatBody = document.querySelector(".chat-body");
    const [text, setText] = useState("");
  
//   txtInput.addEventListener("keyup", (event) => {
//     if (event.keyCode === 13) {
//       renderUserMessage();
//     }
//   });
    
  const renderUserMessage = () => {
        if (text) {
            let userInput = text;
            renderMessageEle(userInput, "user");
            setText("");
            setTimeout(() => {
              renderChatbotResponse(userInput);
              setScrollPosition();
            }, 600);
        }
  };

  const renderChatbotResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
    renderMessageEle(res);
  };

  const renderMessageEle = (txt, type) => {
    let className = "user-message";
    if (type !== "user") {
      className = "chatbot-message";
    }
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    chatBody.append(messageEle);
  };

  const getChatbotResponse = (userInput) => {
    return responseObj[userInput.toLowerCase()] === undefined
      ? "Please try something else"
      : responseObj[userInput.toLowerCase()];
  };

  const setScrollPosition = () => {
    if (chatBody.scrollHeight > 0) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  };

  const responseObj = {
    hello: "Hey ! How are you doing ?",
    hey: "Hey! What's Up",
    hi: "Hello! What's Up",
    "what does adi bhai do": "We are the team of talented developers making website.",
      "what is this website": "We are the team of talented developers making website.",
      "who are you": "I am a bot who is here to answer your queries",
      "who are you?": "I am a bot who is here to answer your queries",
    "i want to know more about you people": `You can contact us using email or DM us on instagram, facebook or twitter`,
   "bye":"Have a great day!",
   "thanks":"Thank You!",
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
  };

  return (
      <div className="chatcontainer">
        <div className="chat-header">
          <div className="chattitle">Let's Chat</div>
        </div>
        <div className="chat-body"></div>
        <div className="chat-input">
          <div className="input-sec">
            <input
              type="text"
              id="chattxtInput" value={text}
                      placeholder="Type here" onChange={(e) => {
                  setText(e.target.value)
              }}
            autoFocus onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                renderUserMessage();
                              }
              }}
            />
          </div>
        <div className="chatsend" id="sendChat" >
                  <img src={sendImg} alt="send" style={{ width: "-webkit-fill-available" }} onClick={() => { renderUserMessage() }}/>
          </div>
        </div>
      </div>
  );
}
