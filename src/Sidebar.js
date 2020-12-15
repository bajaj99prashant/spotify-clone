import React, { useContext } from "react";
import "./css/sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
// eslint-disable-next-line
import { useStateValue, StateContext } from "./DataLayer";

const Sidebar = ({ spotify }) => {
  //eslint-disable-next-line
  const [{ playlists }] = useContext(StateContext);
  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify-logo"
      />

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />

      <h1 className="playlist-heading">Playlists</h1>
      <hr />
      {
        // can't stress on how important this(?) is
        // it can save you from ton of bugs
        playlists?.items?.map((playlist, index) => (
          <SidebarOption
            key={index}
            title={playlist.name}
            id={playlist.id}
            spotify={spotify}
          />
        ))
      }
    </div>
  );
};

export default Sidebar;
