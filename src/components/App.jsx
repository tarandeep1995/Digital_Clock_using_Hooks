import React, { useState } from "react";

function App() {
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  };
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString("en-US", timeOptions);
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", timeOptions);
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}
export default App;
