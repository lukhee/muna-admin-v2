import React from "react";
// import { connect } from "react-redux";
import Proptypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";
import { Table as TableBody, MenuDropDown } from "../../../UiElements";

const menuTitle = [
  {
    id: "1M",
    title: "Preview",
  },
];

const tableHeader = [
  {
    id: 1,
    value: "S/N",
  },
  {
    id: 2,
    value: "Proverb",
  },
  {
    id: 3,
    value: "Status",
  },
];

const proverbData = [
  {
    id: 1,
    content: "let celebrate",
    publish: false,
  },
  {
    id: 2,
    content: "let dance",
    publish: true,
  },
  {
    id: 3,
    content: "let celebrate",
    publish: false,
  },
  {
    id: 4,
    content: "let dance",
    publish: true,
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
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
    border: "1px solid rgba(0,0,0,0.14);",
    "& span": {
      padding: theme.spacing(0.7, 2),
      borderRadius: "5px",
      color: "#f5f5f5",
      fontSize: "0.5rem",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
  },
  published: {
    background: "green",
  },
  unpublished: {
    background: "#f50057",
  },
}));

const ProverbTable = () => {
  const classes = useStyles();

  return (
    <TableBody tableHeader={tableHeader} actionField={true}>
      {proverbData.map((data, index) => (
        <TableRow key={data.id}>
          <StyledTableCell component="th" scope="data">
            {index}
          </StyledTableCell>
          <StyledTableCell>{data.content}</StyledTableCell>
          <StyledTableCell>
            <span
              className={data.publish ? classes.published : classes.unpublished}
            >
              {data.publish ? "published" : "unpublished"}
            </span>
          </StyledTableCell>
          <StyledTableCell align="right">
            <MenuDropDown menuTitle={menuTitle} />
          </StyledTableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

ProverbTable.proptype = {
  proverb: Proptypes.object.isRequired,
  tableHeader: Proptypes.object.isRequired,
};

export default ProverbTable;
