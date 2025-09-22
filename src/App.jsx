import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const playersPromise = fetch('../public/player.json').then(res=> res.json())

function App() {
  return (
    <div>
       <Navbar></Navbar>
       
    </div>
  );
}

export default App;
