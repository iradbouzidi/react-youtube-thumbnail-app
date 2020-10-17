import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import "./VideoCard.css";
import { Button, makeStyles } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: "50%",
    left: "50%",
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function VideoCard({
  thumbnailUrl,
  channelImageUrl,
  postedDate,
  isCustom,
  title,
  channelName,
  noOfViews,
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [thumbTitle, setThumbTitle] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = (e) => {
    e.preventDefault();
    setImageUrl(input);
    setThumbTitle(titleInput);
    setOpen(false);
  };
  

  return (
    <div className="videoCard">
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <form>
            <TextField
              placeholder="Image URL"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <TextField
              placeholder="titles"
              value={titleInput}
              onChange={e => setTitleInput(e.target.value)}
            />
            <Button type="submit" onClick={handleClose}>
              Set Image URL
              </Button>
          </form>
        </div>
      </Modal>
      {isCustom && !imageUrl ? (
        <button onClick={(e) => setOpen(true)}>Select Thumbnail</button>
      ) : (
          <img
            className="videoCard__thumbnail"
            src={imageUrl || thumbnailUrl}
            alt=""
          />
      )}
      <div className="videoCard__info">
        <div className="videoCard__channelImageContainer">
          <img src={channelImageUrl} alt="" />
        </div>

        <div className="videoCard__infoText">
          <p className="videoCard__title">{thumbTitle || title}</p>
          <p className="videoCard__channelName">{channelName}</p>
          <p className="videoCard__noOfViewsAndPostedDate">
            {noOfViews} • {postedDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
