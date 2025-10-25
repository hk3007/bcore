import React, { useState, useEffect } from "react";
import "./typing.css";

const sampleTexts = [
  "The Olympic Games bring together athletes from all over the world.",
  "Typing practice improves accuracy, focus, and concentration.",
  "Discipline is the bridge between goals and achievement.",
  "Champions keep playing until they get it right.",
  "Concentration is the secret of strength."
];

const motivationalQuotes = [
  "🏅 Focus like an Olympian, type like a champion.",
  "💡 Concentration is the key to mastering any skill.",
  "🔥 Every keystroke brings you closer to perfection.",
  "⏳ Patience and practice build accuracy.",
  "🌍 Train your mind, train your fingers, achieve greatness."
];

export const TypingPage = () => {
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [accuracy, setAccuracy] = useState(100);
  const [wpm, setWpm] = useState(0);
  const [quote, setQuote] = useState("");

  // Pick random text & motivational quote
  useEffect(() => {
    restartTest();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // 🚫 disable backspace
      return;
    }

    if (!startTime) setStartTime(Date.now());

    if (e.key.length === 1) {
      const newValue = userInput + e.key;
      setUserInput(newValue);

      // Accuracy
      let correctChars = 0;
      for (let i = 0; i < newValue.length; i++) {
        if (newValue[i] === text[i]) correctChars++;
      }
      const acc = (correctChars / newValue.length) * 100;
      setAccuracy(isNaN(acc) ? 100 : Math.round(acc));

      // WPM
      const timeElapsed = (Date.now() - startTime) / 1000 / 60; // minutes
      const wordsTyped = newValue.trim().split(/\s+/).length;
      setWpm(Math.max(0, Math.round(wordsTyped / timeElapsed)));
    }
  };

  const restartTest = () => {
    setUserInput("");
    setStartTime(null);
    setAccuracy(100);
    setWpm(0);
    const randomText =
      sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setText(randomText);

    const randomQuote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);
  };

  // Render highlighted text
  const renderText = () => {
    return text.split("").map((char, i) => {
      let color = "";
      if (i < userInput.length) {
        color = userInput[i] === char ? "correct" : "wrong";
      }
      return (
        <span key={i} className={color}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="typing-page">
      <h1 className="title">🏆 Olympian Typing Trainer</h1>
      <p className="quote">“{quote}”</p>

      <div className="typing-box">
        <p className="typing-text">{renderText()}</p>

        <input
          type="text"
          value={userInput}
          onKeyDown={handleKeyDown}
          className="typing-input"
          autoFocus
        />

        <div className="stats">
          <div className="stat-card">🎯 Accuracy: <span>{accuracy}%</span></div>
          <div className="stat-card">⌨️ WPM: <span>{wpm}</span></div>
        </div>

        <button className="restart-btn" onClick={restartTest}>
          🔄 Restart
        </button>
      </div>
    </div>
  );
};
