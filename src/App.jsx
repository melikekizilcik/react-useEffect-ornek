/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [melike, setMelike] = useState(0);
  const [berke, setBerke] = useState(0);

  const handleMelike = () => {
    setMelike(melike + 1);
  };

  const handleBerke = () => {
    setBerke(berke + 1);
  };

  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır, daha da çalışmaz");
  }, []);

  useEffect(() => {
    console.log("Her zaman çalışır");
  });

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde ve melike değeri değiştiğinde çalışır, tekrar render edildiği için"
    );
  }, [melike]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde ve berke değeri değiştiğinde çalışır, tekrar render edildiği için"
    );
  }, [berke]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde ve melike veya berke değeri değiştiğinde çalışır, tekrar render edildiği için"
    );
  }, [melike, berke]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={handleMelike}>Melike++</button>
        <div>Melike: {melike}</div>
      </div>
      <div className="secondDiv">
        <button onClick={handleBerke}>Berke++</button>
        <div>Berke: {berke}</div>
      </div>
    </div>
  );
}

export default App;
