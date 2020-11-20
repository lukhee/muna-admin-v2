import React from "react";
import Proptypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table as UITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from "@material-ui/core/";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.common.black,
    fontWeight: 'bold',
    fontSize: '18px',
    padding: theme.spacing(1.5,1),
  },
  body: {
    color: theme.palette.text.secondary,
    fontSize: '16px',
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
      fontSize: "0.7rem",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
  },
  marginBtn: {
    marginBottom: theme.spacing(1.7)
  }
}));

const Table = ({ tableHeader, children, actionField, showPagination, totalCount }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    console.log("rowsperpage")
  };

  return (
    <>
    <TableContainer className={classes.marginBtn} component={Paper}>
      <UITable className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeader.map((title) => (
              <StyledTableCell key={title.id}>{title.value}</StyledTableCell>
            ))}
            {actionField && <StyledTableCell align="right"></StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </UITable>
    </TableContainer>
    {
      showPagination && (
        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10]}
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )
    }
  </>
  );
};

Table.proptype = {
  tableHeader: Proptypes.object.isRequired,
};

Table.defaultProps = {
  actionField: false,
  showPagination: false
};

export default Table;
