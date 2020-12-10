import React, { useState, useEffect } from "react";
import "./css/app.css";
import { navigate, Router } from "@reach/router";
import Login from "./Login";
import Home from "./Home";
import NoRouteFound from "./NoRouteFound";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

// this object represents spotify in our app
const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    // eslint-disable-next-line
    console.log("object from url", hash);
    const _token = hash.access_token;

    if (_token) {
      window.location.hash = "";
      setToken(_token);
      spotify.setAccessToken(_token);
      navigate("/home");
    }

    // eslint-disable-next-line
    console.log("token", token);
  }, []);

  return (
    <div>
      <Router>
        <Login path="/" />
        <Home path="/home" />
        <NoRouteFound default />
      </Router>
    </div>
  );
};

export default App;
