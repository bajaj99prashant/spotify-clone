import React, { useEffect } from "react";
import "./css/player.css";
import Sidebar from "./Sidebar";
import PlayerBody from "./PlayerBody";
import PlayerFooter from "./PlayerFooter";
import { useStateValue } from "./DataLayer";
import { navigate } from "@reach/router";

// eslint-disable-next-line
const Player = ({ spotify }) => {
  const [{ token }] = useStateValue();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="player-page">
      <div className="main-wrapper">
        {/* sidebar */}
        <Sidebar spotify={spotify} />
        {/* body */}
        <PlayerBody spotify={spotify} />
      </div>
      {/* footer */}
      <PlayerFooter spotify={spotify} />
    </div>
  );
};

export default Player;
