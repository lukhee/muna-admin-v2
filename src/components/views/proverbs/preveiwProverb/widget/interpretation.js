import React from "react";
// import { connect } from "react-redux";
import Proptypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";
import {
  Table as TableBody,
  MenuDropDown,
  Button,
} from "../../../../UiElements";

const menuTitle = [
  {
    id: "1M",
    title: "Edit",
  },
  {
    id: "2M",
    title: "Delete",
  },
];

const tableHeader = [
  {
    id: 1,
    value: "S/N",
  },
  {
    id: 2,
    value: "Transaltion",
  },
  {
    id: 3,
    value: "Language",
  },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.common.black,
    padding: "5px 10px",
  },
  body: {
    fontSize: 14,
    padding: "4px 10px",
    marginBottom: theme.spacing(2),
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
    border: "1px solid rgba(0,0,0,0.14);",
    "& span": {
      padding: theme.spacing(0.7, 2),
      borderRadius: "2px",
      color: "#f5f5f5",
      fontSize: "0.5rem",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
  },
  published: {
    background: theme.palette.primary.main,
  },
  unpublished: {
    background: theme.palette.secondary.main,
  },
}));

const Interpretation = ({
  interpretation,
  publishHandler,
  editHandler,
  deleteHandler,
}) => {
  const classes = useStyles();

  return (
    <>
      <TableBody
        tableHeader={tableHeader}
        actionField={true}
      >
        {interpretation.map((data, index) => (
          <TableRow key={data.id}>
            <StyledTableCell component="th" scope="data">
              {index + 1}
            </StyledTableCell>
            <StyledTableCell>{data.content}</StyledTableCell>
            <StyledTableCell>{data.language}</StyledTableCell>
            {/* <StyledTableCell>
            <span
              className={data.publish ? classes.published : classes.unpublished}
            >
              {data.publish ? "published" : "unpublished"}
            </span>
          </StyledTableCell> */}
            <StyledTableCell align="right">
              <MenuDropDown
                menuTitle={menuTitle}
                publish={data.publish}
                toggleState={true}
                publishHandler={() => publishHandler(data.publish)}
                previewHandler={() => editHandler(data.id, data.content)}
                deleteHandler={() => deleteHandler(data.id)}
              />
            </StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
      <Button variant="outlined"> Create Interpretation </Button>
    </>
  );
};

Interpretation.proptype = {
  translation: Proptypes.object.isRequired,
  tableHeader: Proptypes.object.isRequired,
};

export default Interpretation;
