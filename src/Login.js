import React from "react";
import "./css/login.css";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login-page">
      <img
        className="spotify-logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify-logo"
      />
      <div>
        <h2 className="main-heading">Listening is everything</h2>
        <h3 className="secondary-heading">
          Millions of songs and podcasts. Chill with Spotify.
        </h3>
      </div>
      <a href={loginUrl} className="login-btn">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
};

export default Login;
