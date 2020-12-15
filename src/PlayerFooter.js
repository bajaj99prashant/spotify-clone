import React from "react";
import "./css/playerFooter.css";
import FooterAlbum from "./FooterAlbum";
import FooterPlayer from "./FooterPlayer";
import FooterControls from "./FooterControls";

const PlayerFooter = ({ spotify }) => {
  return (
    <div className="player-footer">
      <FooterAlbum />
      <FooterPlayer spotify={spotify} />
      <FooterControls />
    </div>
  );
};

export default PlayerFooter;
