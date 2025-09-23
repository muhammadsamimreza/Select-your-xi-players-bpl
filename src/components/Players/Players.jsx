import React, { use } from "react";
import Player from "../Player/Player";

const Players = ({ playersPromise, singlePlayer }) => {
  const playersData = use(playersPromise);
  // console.log(playersData);

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1>Available: {playersData.length} </h1>
      <div className="grid grid-cols-4 gap-5">
        {playersData.map((player) => (
          <Player 
          key={player.id}
          singlePlayer={singlePlayer}
          player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
