import React, { use, useState } from "react";
import Avaliable from "../AvablePlayers/Avaliable";
import SelectedPlayers from "../AvablePlayers/SelectedPlayers";

const Player = ({ fetchPromise, setcoin, coin }) => {
  const players = use(fetchPromise);

  const [selectedType, setSelectedType] = useState("available");
  const [selecteplayres, setselectePlayres] = useState([]);

  const handleRemovePlayer = (playerToRemove) => {
    setselectePlayres((prev) =>
      prev.filter((player) => player.id !== playerToRemove.id)
    );

    // প্লেয়ার রিমুভ করলে তার দাম কয়েনে ফেরত যোগ করা (না চাইলে এই লাইনটি বাদ দিতে পারেন)
    if (setcoin) {
      setcoin((prevCoin) => prevCoin + playerToRemove.price);
    }
  };

  return (
    <div className="container mx-auto my-[60px] px-3">
      <div className="flex justify-between gap-4 items-center mb-[20px]">
        {selectedType === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Players ({selecteplayres.length}/{players.length})
          </h2>
        )}

        <div>
          <button
            type="button"
            onClick={() => setSelectedType("available")}
            className={`btn ${
              selectedType === "available" ? "bg-[#E7FE29]" : "bg-red-500 text-white"
            } rounded-r-none rounded-l-xl`}
          >
            Available
          </button>

          <button
            type="button"
            onClick={() => setSelectedType("selected")}
            className={`btn ${
              selectedType === "selected" ? "bg-[#E7FE29]" : "bg-red-500 text-white"
            } rounded-l-none rounded-r-xl`}
          >
            Selected ({selecteplayres.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <Avaliable
          players={players}
          setcoin={setcoin}
          coin={coin}
          selecteplayres={selecteplayres}
          setselectePlayres={setselectePlayres}
        />
      ) : (
        <SelectedPlayers
          selecteplayres={selecteplayres}
          onRemovePlayer={handleRemovePlayer}
          onAddMore={() => setSelectedType("available")}
        />
      )}
    </div>
  );
};

export default Player;