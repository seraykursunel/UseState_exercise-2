import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [keys, setKeys] = useState([]);
  function onKeyPress(e) {
    e.preventdefault();
    const keyPressed = e.key;
    console.log(e);
    setKeys(keyPressed);
  }
  return (
    <div className="App">
      <h5>Karakter Tipi: {keys}</h5>
      <div>
        <input placeholder="buraya yazın" onKeyDown={onKeyPress} />
      </div>
    </div>
  );
}
