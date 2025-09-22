import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";

const playersPromise = fetch("../public/player.json").then((res) => res.json());

function App() {
  return (
    <div className="bg-green-100">
      <Navbar></Navbar>
      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </div>
  );
}

export default App;
