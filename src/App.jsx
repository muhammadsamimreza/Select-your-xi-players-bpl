import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";
import Selected from "./components/Selected/Selected";
import Header from "./components/Header/Header";

const playersPromise = fetch("/public/player.json").then((res) => res.json());

function App() {
  const [purchase, setPurchase] = useState(true);
  const [availableBalance, setBalance] = useState(60000000);
  const [selectPlayer, setSelectPlayer] = useState([]);

  return (
    <div className="bg-green-100">
      <Navbar availableBalance={availableBalance}></Navbar>
      <Header setPurchase={setPurchase} purchase={purchase}></Header>

      {purchase ? (
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <Players
            setSelectPlayer={setSelectPlayer}
            selectPlayer={selectPlayer}
            setBalance={setBalance}
            availableBalance={availableBalance}
            playersPromise={playersPromise}
          ></Players>
        </Suspense>
      ) : (
        <Selected selectPlayer={selectPlayer}></Selected>
      )}
    </div>
  );
}

export default App;
