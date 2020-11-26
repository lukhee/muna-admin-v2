import React from "react";
import Proptypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";
import { Table as TableBody, MenuDropDown, Tooltips } from "../../../UiElements";

const menuTitle = [
  {
    id: "1M",
    title: "Preview",
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
    id: 3,
    value: "Proverb",
  },
  {
    id: 4,
    value: "Ethnic",
  },
  {
    id: 5,
    value: "Status",
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
      borderRadius: "2px",
      fontSize: "0.5rem",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
  },
  published: {
    background: theme.palette.primary.main,
    color: '#f5f5f5',
  },
  unpublished: {
    background: theme.palette.secondary.main,
    color: '#f5f5f5',
  },
}));

const ProverbTable = ({ proverbs, pageIndex, loading, publishHandler, previewHandler, deleteHandler, totalProverb, fetchProverb }) => {
  const setPaginationIndex = (newPage, rowsPerPage) => {
    const pageIndexCount = rowsPerPage*newPage + 1
    newPage++
    fetchProverb(newPage, pageIndexCount)
  }
  const classes = useStyles();

  return (
    <>
    {loading ? (<h2> Loading ...</h2>) : (
      <TableBody tableHeader={tableHeader} actionField={true} showPagination={true} totalCount={totalProverb} fetchProverb={(newPage, rowsPerPage)=>setPaginationIndex(newPage, rowsPerPage)}>
        {proverbs.map((data, index) => (
          <TableRow key={data.id}>
            <StyledTableCell component="th" scope="data">
              {pageIndex + index}
            </StyledTableCell>
            <StyledTableCell>
              <Tooltips title={data.category}>
                {data.content}
              </Tooltips>
            </StyledTableCell>
            <StyledTableCell>{data.ethnic.language}</StyledTableCell>
            <StyledTableCell>
              <span
                className={data.publish ? classes.published : classes.unpublished}
              >
                {data.publish ? "published" : "unpublished"}
              </span>
            </StyledTableCell>
            <StyledTableCell align="right">
              <MenuDropDown
                menuTitle={menuTitle}
                publish={data.publish}
                toggleState={true}
                publishHandler={() => publishHandler(data)}
                previewHandler={() => previewHandler(data.id)}
                deleteHandler={() => deleteHandler(data.id)}
              />
            </StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    )}
    </>
  );
};

ProverbTable.proptype = {
  proverbs: Proptypes.object.isRequired,
  tableHeader: Proptypes.object.isRequired,
};

export default ProverbTable;
