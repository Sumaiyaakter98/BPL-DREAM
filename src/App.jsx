import { Suspense, useState } from "react";


import "./App.css";
import Navbar from "./components/Navber/Navbar";
import Banner from "./components/Navber/Banner";
import Player from "./components/players/Player";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fotter from "./components/Footer/Fotter";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();


};

function App() {
  const fetchPromise = fetchPlayer();

  const [coin, setcoin] = useState(50000)

  return (
    <div className="bg-white">
      <Navbar coin={coin}/>
      <Banner />

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>} >
        <Player fetchPromise={fetchPromise}  setcoin={setcoin} coin={coin}/>
      </Suspense>

      <ToastContainer position="top-right" autoClose={2000} />
      <Fotter/>
    </div>
  );
}

export default App;
