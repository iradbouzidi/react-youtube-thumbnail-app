import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";

function Header() {
  return (
    <div className="header">
      <div className="header__leftSide">
        <MenuIcon  />
        <img 
          className="header__logo" 
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
          alt=""
        />
      </div>

      <div className="header__search">
        <TextField
          className="header__input"
          placeholder="Search"
          variant="outlined"
        />
        <Button className="header__searchButton"
          variant="outlined">
          <SearchIcon />
        </Button>
      </div>
      
      <div className="header__rightside">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
      </div>
    
    </div>
  );
}

export default Header;
