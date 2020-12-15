import React from "react";
import "./css/footerPlayer.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import Slider from "@material-ui/core/Slider";
import { useStateValue } from "./DataLayer";

function FooterPlayer({ spotify }) {
  const [{ playing, playlist_main }, dispatch] = useStateValue();
  const playPlaylist = () => {
    spotify
      .play({
        context_uri: playlist_main.uri,
      })
      .then((response) => {
        // eslint-disable-next-line
        console.log(response);
        dispatch({
          type: "PLAY_PAUSE",
        });
      })
      .catch((err) => {
        dispatch({
          type: "SET_ERROR",
        });
        console.log(err);
      });
  };

  const pausePlaylist = () => {
    spotify.pause().then((response) => {
      // eslint-disable-next-line
      console.log(response);
      dispatch({
        type: "PLAY_PAUSE",
      });
    });
  };

  return (
    <div className="footer-player">
      <div className="footer-control-icons">
        <ShuffleIcon style={{ ...addIconStyles() }} />
        <SkipPreviousIcon style={{ ...addIconStyles(), height: "20px" }} />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={pausePlaylist}
            style={{ ...addIconStyles(), height: "40px", width: "40px" }}
            className="footer-play"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={playPlaylist}
            style={{ ...addIconStyles(), height: "40px", width: "40px" }}
            className="footer-play"
          />
        )}
        <SkipNextIcon style={{ ...addIconStyles(), height: "20px" }} />
        <RepeatIcon style={{ ...addIconStyles() }} />
      </div>
      <div className="slider">
        <span>0:00</span>
        <Slider style={makeSliderStyles()} value="0" />
        <span>3:30</span>
      </div>
    </div>
  );
}

export default FooterPlayer;

const addIconStyles = () => {
  const obj = {
    margin: "auto 0.5rem",
    height: "14px",
    color: "#b3b3b3",
    cursor: "pointer",
  };

  return obj;
};

const makeSliderStyles = () => {
  const obj = {
    width: "400px",
    color: "#b3b3b3",
    cursor: "pointer",
  };

  return obj;
};
