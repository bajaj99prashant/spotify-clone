import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Avatar } from "@material-ui/core";
import "./css/header.css";
import { useStateValue } from "./DataLayer";
import { navigate } from "@reach/router";

const Header = () => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });

    navigate("/");
  };
  return (
    <div className="header">
      <div className="header-left">
        <ArrowBackIosIcon style={addIconStyles()} />
        <ArrowForwardIosIcon style={addIconStyles()} />
      </div>
      <div className="options">
        <div className="header-right">
          <Avatar
            style={{ height: "24px", width: "24px", background: "#282828" }}
            src={user?.images[0]?.url}
            alt={user?.display_name}
          />
          <h4>{user?.display_name}</h4>
        </div>

        <button className="logout" onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Header;

const addIconStyles = () => {
  const obj = {
    margin: "auto 0.8rem",
    cursor: "pointer",
    background: "#040404",
    padding: "0.4rem 0.6rem",
    fontSize: "30px",
    borderRadius: "16px",
  };

  return obj;
};
