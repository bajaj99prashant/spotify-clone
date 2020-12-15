import React from "react";
import "./css/sidebarOption.css";
import { useStateValue } from "./DataLayer";

const SidebarOption = ({ title, Icon, id, spotify }) => {
  // eslint-disable-next-line
  const [{ playlist_id, playlist_main }, dispatch] = useStateValue();

  const setId = () => {
    dispatch({
      type: "SET_PLAYLIST_ID",
      playlist_id: id,
    });

    console.log("[playlist_id]", playlist_id);

    if (playlist_id) {
      spotify.getPlaylist(playlist_id).then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST_MAIN",
          playlist_main: playlist,
        });
        console.log("[playlist_object]", playlist_main);
      });
    }
  };

  return (
    <div
      aria-hidden={true}
      className="sidebar-option"
      onClick={setId}
      onKeyDown={setId}
    >
      {Icon && <Icon className="sidebar-option-icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
