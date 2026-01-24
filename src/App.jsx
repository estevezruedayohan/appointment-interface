import { useState } from "react";
import "./App.css";
import { HiHeart, HiLightningBolt } from "react-icons/hi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-900 font-thin">
      <HiHeart className="text-4xl animate-pulse text-sky-400" />
      <h1 className="text-4xl font-bold text-sky-400">
        Vite + Tailwind v4 Working!
      </h1>
      <HiLightningBolt className="text-4xl text-yellow-300" />
    </div>
  );
}

export default App;
