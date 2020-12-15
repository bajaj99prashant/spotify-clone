import React from "react";
import "./css/footerControls.css";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import DevicesIcon from "@material-ui/icons/Devices";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Slider from "@material-ui/core/Slider";

function FooterControls() {
  return (
    <div className="footer-controls">
      <QueueMusicIcon style={addIconStyles()} />
      <DevicesIcon style={addIconStyles()} />
      <VolumeUpIcon style={addIconStyles()} />
      <Slider style={makeSliderStyles()} value="70" />
    </div>
  );
}

export default FooterControls;

const addIconStyles = () => {
  const obj = {
    margin: "auto 0.2rem",
    height: "14px",
    color: "#b3b3b3",
    cursor: "pointer",
  };

  return obj;
};

const makeSliderStyles = () => {
  const obj = {
    width: "100px",
    color: "#b3b3b3",
    cursor: "pointer",
  };

  return obj;
};
