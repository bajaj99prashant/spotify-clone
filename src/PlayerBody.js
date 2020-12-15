import React from "react";
import "./css/playerBody.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useStateValue } from "./DataLayer";
import PlayerBodyFallback from "./PlayerBodyFallback";

const PlayerBody = ({ spotify }) => {
  const [{ playlist_main }] = useStateValue();
  return (
    <div className="player-body">
      <Header />
      {playlist_main ? (
        <SongRow playlist_main={playlist_main} spotify={spotify} />
      ) : (
        <PlayerBodyFallback />
      )}
    </div>
  );
};

export default PlayerBody;
