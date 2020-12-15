export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null,
  track_uris: [],
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYLIST_MAIN":
      return {
        ...state,
        playlist_main: action.playlist_main,
      };
    case "SET_PLAYLIST_ID":
      return {
        ...state,
        playlist_id: action.playlist_id,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
        playlists: [],
        playing: false,
        item: null,
      };
    case "PLAY_PAUSE":
      return {
        ...state,
        playing: !state.playing,
      };
    case "ADD_TRACK":
      return {
        ...state,
        track_uris: [...state.track_uris, action.uri],
      };
    case "SET_ERROR":
      return {
        ...state,
        error: !state.error,
      };
    default:
      return state;
  }
};

export default reducer;
