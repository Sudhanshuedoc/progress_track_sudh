import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function GreetingCard({ message, name }) {
  return (
    <div style={{ border: "1px solid red", margin: "10px" }}>
      <h1>
        {message} , from {name}
      </h1>
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0);
  const messages = [
    { name: "Alice", message: "Hello, how are you?" },
    { name: "Bob", message: "I'm doing great, thanks!" },
    { name: "Charlie", message: "What's everyone up to today?" },
    {
      name: "Diana",
      message: "Just relaxing and catching up on some reading.",
    },
    { name: "Eve", message: "Same here, enjoying some quiet time." },
    { name: "Frank", message: "Anyone up for a movie tonight?" },
    { name: "Grace", message: "I’d love to join for a movie!" },
    { name: "Hank", message: "Count me in too!" },
    { name: "Ivy", message: "What movie are we watching?" },
    { name: "Jack", message: "How about a comedy?" },
    { name: "Karen", message: "Comedy sounds perfect!" },
    { name: "Leo", message: "Did you all watch the latest Marvel movie?" },
    { name: "Mona", message: "Yes, it was amazing!" },
    { name: "Nina", message: "I still need to see it; no spoilers!" },
    { name: "Oscar", message: "No worries, we'll keep it spoiler-free." },
    { name: "Pam", message: "What’s everyone’s favorite genre?" },
    { name: "Quinn", message: "I’m into sci-fi mostly." },
    { name: "Rick", message: "Action movies are my thing." },
    { name: "Sara", message: "I love a good thriller." },
    { name: "Tom", message: "Romantic comedies for me!" },
    { name: "Uma", message: "Historical dramas are my favorite." },
    { name: "Vince", message: "I can watch any genre, honestly." },
    { name: "Wade", message: "Who’s up for a game night this weekend?" },
    { name: "Xena", message: "I’m totally in for game night!" },
    { name: "Yara", message: "Same here, sounds fun!" },
    { name: "Zane", message: "I’ll bring some board games." },
    { name: "Amy", message: "I’ll bring snacks for everyone." },
    { name: "Ben", message: "Let’s also plan a group dinner soon!" },
    { name: "Cathy", message: "Yes, dinner sounds awesome!" },
    { name: "David", message: "How about trying that new Italian place?" },
    { name: "Elena", message: "Great idea, I’ve heard good things about it!" },
  ];

  return (
    <>
      {messages.map((ele) => {
        return (
          <GreetingCard key={ele.name} message={ele.message} name={ele.name} />
        );
      })}
    </>
  );
}

export default App;
