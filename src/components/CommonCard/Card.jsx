import React from "react";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import{  toast } from "react-toastify";

const FALLBACK_IMG = "https://placehold.co/400x250/e5e7eb/374151?text=No+Image";

const Card = ({
  players = [],
  onSelectPlayer,
  setcoin,
  coin = 0,
  selecteplayres = [],
  setselectePlayres,
}) => {
  const handleChoosePlayer = (player) => {
    const isAlreadySelected = selecteplayres.some(
      (item) => item.id === player.id,
    );
    if (isAlreadySelected) return;

    if (coin < player.price) {
     toast.error("Not enough coins to select this player!");
      return;
    }

    if (setcoin) {
      setcoin((prevCoin) => prevCoin - player.price);
    }

    if (setselectePlayres) {
      setselectePlayres((prev) => [...prev, player]);
    }

    if (onSelectPlayer) {
      onSelectPlayer(player, true);
    }

    // alert(`${player.playerName} selected!`);
    toast.success(`${player.playerName} selected!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
      {players.map((player) => {
        const isSelected = selecteplayres.some((item) => item.id === player.id);

        return (
          <div
            key={player.id}
            className="card bg-base-100 w-full shadow-sm border border-gray-200 rounded-xl p-3.5"
          >
            <figure className="w-full h-56 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center mb-3">
              <img
                src={player.playerImage || FALLBACK_IMG}
                alt={player.playerName}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_IMG;
                }}
                className="w-full h-full object-contain"
              />
            </figure>

            <div className="p-0 space-y-2.5">
              <h2 className="flex items-center gap-2 text-base font-bold text-gray-900">
                <FaUser className="text-gray-600 text-sm shrink-0" />
                <span>{player.playerName}</span>
              </h2>

              <div className="flex justify-between items-center gap-2">
                <div className="flex gap-1.5 items-center text-xs text-gray-400">
                  <FaFlag className="text-gray-400 text-xs shrink-0" />
                  <span>{player.playerCountry}</span>
                </div>
                <span className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg">
                  {player.playerType}
                </span>
              </div>

              <div className="divider my-1"></div>

              <div className="text-xs font-bold text-gray-900">
                Rating ({player.rating})
              </div>

              <div className="flex justify-between items-center gap-2 text-xs">
                <span className="font-bold text-gray-900">
                  {player.battingStyle}
                </span>
                <span className="text-gray-400 text-right">
                  {player.bowlingStyle}
                </span>
              </div>

              <div className="flex justify-between items-center gap-2 pt-1.5">
                <p className="text-xs font-bold text-gray-900">
                  Price: ${player.price}
                </p>
                <button
                  type="button"
                  disabled={isSelected}
                  onClick={() => handleChoosePlayer(player)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition ${
                    isSelected
                      ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 cursor-pointer"
                  }`}
                >
                  {isSelected ? "Selected" : "Choose Player"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
