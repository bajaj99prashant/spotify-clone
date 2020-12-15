import React, { useEffect } from "react";
import "./css/app.css";
import { navigate, Router } from "@reach/router";
import Login from "./Login";
import Player from "./Player";
import NoRouteFound from "./NoRouteFound";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./DataLayer";

// this object represents spotify in our app
const spotify = new SpotifyWebApi();

const App = () => {
  // eslint-disable-next-line
  const [{ token, playlists, discover_weekly }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    if (_token) {
      window.location.hash = "";
      // dispatching an action
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      // spotify.getPlaylist("37i9dQZF1DWVNxbAc9fvM9").then((playlist) => {
      //   dispatch({
      //     type: "SET_DISCOVER_WEEKLY",
      //     discover_weekly: playlist,
      //   });
      // });
    }
  }, []);

  if (token) {
    navigate("/player");
  }

  return (
    <div>
      <Router>
        <Login path="/" />
        <Player path="/player" spotify={spotify} />
        <NoRouteFound default />
      </Router>
    </div>
  );
};

export default App;
