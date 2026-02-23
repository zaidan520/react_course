import Chai from "./chai";
import Welcome from "./components/Welcome";
import { useState } from "react";
import Name from "./components/Name";
import City from "./components/City";
import Student from "./components/Student";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [counter, setcounter] = useState(0);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [text, settext] = useState(" ");
  const logToggel = () => {
    setisLoggedIn(!isLoggedIn);
  };
  const fruits = ["apple", "mango", "peach"];
  const Num = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Chai />
      <Navbar />
      <h1>
        chai aur react | My name is ali zaidan and today i learn how to maintain
        the structure of react site and which which files we want{" "}
      </h1>
      <Welcome />
      <h1>{counter}</h1>
      <button onClick={() => setcounter(counter + 1)}>Counter </button>
      <Name />
      <City />
      <Student Name="Ali" age={22} />
      <div>
        {isLoggedIn ? (
          <h1>welcome press button to logout</h1>
        ) : (
          <h1>PLz login</h1>
        )}
        <button onClick={logToggel}>{isLoggedIn ? "logout" : "logIn"}</button>
      </div>
      <div>
        <h2>fruits List</h2>
        {fruits.map((fruit, index) => (
          <p key={index}>{fruit}</p>
        ))}
        {Num.map((Num) => (
          <p>{Num}</p>
        ))}
        <input
          type="text"
          placeholder="YOUR NAME"
          onChange={(e) => settext(e.target.value)}
        />
        <h2>you type: {text}</h2>
      </div>
      <Card title="Car Informatiom" />
    </>
  );
}

export default App;
