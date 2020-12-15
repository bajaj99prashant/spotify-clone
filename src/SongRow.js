import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import "./css/songRow.css";
import { useStateValue } from "./DataLayer";

function SongRow({ playlist_main, spotify }) {
  const [{ playing, track_uris }, dispatch] = useStateValue();

  const playPlaylist = () => {
    spotify
      .play({
        context_uri: playlist_main.uri,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: "PLAY_PAUSE",
        });
      });
  };

  const pausePlaylist = () => {
    spotify.pause().then((response) => {
      console.log(response);
      dispatch({
        type: "PLAY_PAUSE",
      });
    });
  };

  // eslint-disable-next-line
  const playTrack = (uri) => {
    if (uri) {
      dispatch({
        type: "ADD_TRACK",
        uri,
      });

      spotify
        .play({
          uris: track_uris,
        })
        .then((response) => {
          console.log(response);
          dispatch({
            type: "PLAY_PAUSE",
          });
        });
    }
  };
  return (
    <div className="song-row">
      <div className="album-information">
        {playlist_main?.images ? (
          <img src={playlist_main?.images[0]?.url} alt="album-logo" />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/23/Phoebe_Bridgers_Punisher_%282020%29.png"
            alt="album-logo"
          />
        )}
        <div className="information">
          <h1>{playlist_main?.name}</h1>
          <p>{playlist_main?.description}</p>
          <div className="details">
            <span className="details-main">
              {playlist_main?.owner?.display_name}&nbsp;
            </span>
            <span>
              .&nbsp;
              {playlist_main?.followers?.total > 1000
                ? `${Math.floor(playlist_main?.followers?.total / 1000)}K`
                : playlist_main?.followers?.total}{" "}
              likes&nbsp;.
            </span>
            <span>&nbsp;{playlist_main?.tracks?.total} songs</span>
          </div>
        </div>
      </div>
      <div className="playlist-songs">
        <div className="playlist-control">
          {playing ? (
            <PauseCircleFilledIcon
              className="play-pause playlist-icon"
              onClick={pausePlaylist}
            />
          ) : (
            <PlayCircleFilledIcon
              className="play-pause playlist-icon"
              onClick={playPlaylist}
            />
          )}
          <FavoriteIcon className="playlist-icon" />
          <MoreHorizIcon className="playlist-icon horizontal" />
        </div>

        <div className="song-row-wrapper">
          {playlist_main?.tracks?.items?.map((item, index) => (
            <div className="songs" key={index}>
              <div className="track-details">
                <MusicNoteIcon />
                <div className="track-title">
                  <h3>{item?.track?.name}</h3>
                  <span>{item?.track?.album?.artists[0]?.name}</span>
                </div>
              </div>
              <div className="album">
                <span>{item?.track?.album?.name}</span>
              </div>
              <div className="date-added">
                <span>{dateTimeString(item?.added_at)}</span>
              </div>
              <div className="time">
                <span>
                  {Math.floor(Math.floor(item?.track?.duration_ms / 1000) / 60)}
                  :
                  {Math.floor(item?.track?.duration_ms / 1000) -
                    Math.floor(item?.track?.duration_ms / 1000 / 60) * 60}
                  min
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SongRow;

const dateTimeString = (value) => {
  const val = value.substring(0, 10);
  const arrStr = val.split("-");
  const month = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  return `${month[arrStr[1]]}${arrStr[2]}, ${arrStr[0]}`;
};
