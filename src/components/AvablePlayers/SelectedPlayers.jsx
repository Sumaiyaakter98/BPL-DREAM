import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const FALLBACK_IMG = "https://placehold.co/150x150/e5e7eb/374151?text=No+Image";

const SelectedPlayers = ({
  selecteplayres = [],
  onRemovePlayer,
  onAddMore,
}) => {
  return (
    <div className="space-y-4">
      {selecteplayres.length === 0 ? (
        <div className="border border-gray-200 rounded-xl p-8 text-center text-gray-500">
          No players selected yet.
        </div>
      ) : (
        <div className="space-y-3">
          {selecteplayres.map((player) => (
            <div
              key={player.id}
              className="flex items-center justify-between gap-4 border border-gray-200 rounded-xl p-3.5 bg-base-100 shadow-xs"
            >
              <div className="flex items-center gap-4">
                <img
                  src={player.playerImage || FALLBACK_IMG}
                  alt={player.playerName}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_IMG;
                  }}
                  className="w-16 h-16 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1 shrink-0"
                />
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    {player.playerName}
                  </h3>
                  <p className="text-xs text-gray-500">{player.playerType}</p>
                  <p className="text-xs font-semibold text-gray-700 mt-0.5">
                    Price: ${player.price}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRemovePlayer && onRemovePlayer(player)}
                className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50 cursor-pointer"
                title="Remove Player"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="pt-2">
        <button
          type="button"
          onClick={onAddMore}
          className="btn bg-[#E7FE29] text-gray-900 border-none rounded-xl font-bold"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;