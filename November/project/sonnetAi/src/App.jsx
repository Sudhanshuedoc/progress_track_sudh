import { useState } from "react";
import "./App.css";

function SpeechBubble({ text, role }) {
  return (
    <>
      <div className={`message ${role}`}>
        <div>{text}</div>
      </div>
    </>
  );
}

let messages = [
  { id: 1733222991976, text: "Hi! how are you?", sender: "user" },
  { id: 1733222994240, text: "Message received, thanks!", sender: "bot" },
  { id: 1733223012365, text: "Can you help me?", sender: "user" },
  { id: 1733223013442, text: "Message received, hahah!", sender: "bot" },
];
function App() {
  let [message, setMessage] = useState(messages);
  let [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    
  }
  return (
    <>
      <div className="messaging">
        <div id="title">
          <h1>
            Elysium <span style={{ color: "orange" }}>Ai</span>
          </h1>
        </div>
        <div className="convo">
          {" "}
          {message.map((ele) => {
            return (
              <SpeechBubble key={ele.id} text={ele.text} role={ele.sender} />
            );
          })}
        </div>
        <div className="footer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask CHATBOT"
              onChange={handleChange}
              name=""
              id=""
            />
            <button type="submit">ASK</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
