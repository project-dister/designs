import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Navbar />
      <Hero />
      <Category />
    </div>
  );
}

export default App;
