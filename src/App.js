import React, { useState } from "react";
import "./styles.css";

const emojiDictonary = {
  "😃": "Happy",
  "💁": "What",
  "😡": "Angry",
  "👌": "Wonderfull",
  "🎍": "Vegeies",
  "😍": "Lovely",
  "🤭": "Shy",
  "🥺": "Emotional",
  "📙": "Book",
  "😈": "Demon",
  "😴": "Sleeping",
  "🤝🏻": "Handshake",
  "🌹": "Rose",
  "🔥": "Lit",
  "💦": "Water-droplets",
};

var emojiknown = Object.keys(emojiDictonary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictonary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! We don't have this in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictonary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning}</h2>
      <h3>Emojis we know</h3>
      {emojiknown.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
