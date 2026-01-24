import { useState } from "react";
import "./App.css";
import { HiHeart, HiLightningBolt } from "react-icons/hi";
import Search from "./components/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <HiHeart className="inline-block animate-pulse text-sky-800" />
        Vite + Tailwind v4 Working!
        <HiLightningBolt className="inline-block animate-pulse text-yellow-400" />
      </h1>
      <Search></Search>
    </div>
  );
}

export default App;
