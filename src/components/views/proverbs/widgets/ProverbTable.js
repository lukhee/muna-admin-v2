import React from "react";
// import { connect } from "react-redux";
import Proptypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";
import {Table as TableBody, MenuDropDown} from '../../../UiElements'

const menuTitle = [
    {
        id: '1M',
        title: 'Preview'
    }
]

const tableHeader = [
    {
        id: 1,
        value: 'S/N',
    },
    {
        id: 2,
        value: 'Proverb',
    },
    {
        id: 3,
        value: 'Status',
    },
]

const proverbData =  [
    {
        id: 1,
        content: "let celebrate",
        publish: false
    }, 
    {
        id: 2,
        content: "let dance",
        publish: true,

    },
    {
        id: 3,
        content: "let celebrate",
        publish: false
    }, 
    {
        id: 4,
        content: "let dance",
        publish: true,

    }
]

// const proverbData = [
//     {
//       id: "1",
//       content: "Bi iku ile ko pa ni, ti ode ko le pa ni (edited)",
//       interpretation: [],
//       translation: ["a", "r", "u"],
//       theme: ["malice", "power"],
//       language: "Yoruba",
//       published: false
//     },
//     {
//       id: "2",
//       content: "Eni ti a fe ni a mo, a ko mo eni ti o fe ni...",
//       interpretation: [1, 2, 3, 4],
//       translation: ["a", "t", "u"],
//       theme: ["love"],
//       language: "Yoruba",
//       published: true
//     },
//     {
//       id: "3",
//       content: "Ti igi ba re lu igi, Ti oke re ni a o koko re",
//       interpretation: [1, 2, 4, 5],
//       translation: ["a", "r", "t"],
//       theme: ["war", "love"],
//       language: "Yoruba",
//       published: false
//     },
//     {
//       id: "4",
//       content: "enything anything",
//       interpretation: [1, 2, 3, 4, 5],
//       translation: ["big", "r", "t", "u"],
//       theme: [],
//       language: "Igbo",
//       published: true
//     },
//     {
//       id: "5",
//       content: "something light",
//       interpretation: [1, 2, 3, 4, 5],
//       translation: ["a", "r", "o", "u"],
//       theme: [],
//       language: "Igbo",
//       published: true
//     },
//     {
//       id: "6",
//       content: "everything good",
//       interpretation: [1, 2, 3, 4, 5],
//       translation: ["m", "r", "t", "u"],
//       theme: [],
//       language: "Igbo",
//       published: false
//     },
//   ];

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
      padding: theme.spacing(0.3, 2),
      borderRadius: theme.spacing(1),
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

const ProverbTable = ( ) => {
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
                      className={
                        data.publish ? classes.published : classes.unpublished
                      }
                    >
                      {data.publish ? "published" : "unpublished"}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                      <MenuDropDown menuTitle={menuTitle}/>
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

export default (ProverbTable);
