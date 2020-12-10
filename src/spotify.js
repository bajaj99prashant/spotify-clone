export const authEndpoint = "https://accounts.spotify.com/authorize"; // url where to authenticacte
const redirectUri = "http://localhost:3000/"; // state where to take back user when login is successful
const clientId = "e9b48d860625417eb6c36f548cf30782";

// Scopes provide Spotify users using third-party apps the confidence that only the information they choose to share will be shared, and nothing more.
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// to get excess token from url after login is complete
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`; // final url which needs to be called in order to authorize user
