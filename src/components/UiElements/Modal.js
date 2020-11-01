import React from "react";
import { Modal as UIModal, makeStyles } from "@material-ui/core";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "18px",
    letterSpacing: 0,
    textTransform: "capitalize",
  },
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    width: "80%",
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
}));

const Modal = ({ children, modalTitle }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        {modalTitle}
      </Button>
      <UIModal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>{children}</div>
      </UIModal>
    </div>
  );
};

Modal.defaultProps = {
  modalTitle: "Open Modal",
};

export default Modal;
