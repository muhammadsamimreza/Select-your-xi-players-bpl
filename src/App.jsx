import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";
import Selected from "./components/Selected/Selected";
import Header from "./components/Header/Header";

const playersPromise = fetch("/public/player.json").then((res) => res.json());

function App() {
  const singlePlayer = ({ player }) => {
    console.log(player);
  };
  const [purchase, setPurchase] = useState(true);
  return (
    <div className="bg-green-100">
      <Navbar></Navbar>
      <Header setPurchase={setPurchase} purchase={purchase}></Header>

      {purchase ? (
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <Players
            singlePlayer={singlePlayer}
            playersPromise={playersPromise}
          ></Players>
        </Suspense>
      ) : (
        <Selected></Selected>
      )}
    </div>
  );
}

export default App;
