import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const SalesTable = ({ sales, onEditSale, onDeleteSale }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Quantity</StyledTableCell>
            <StyledTableCell>Total Price</StyledTableCell>
            <StyledTableCell align="right">Product ID</StyledTableCell>
            <StyledTableCell align="right">Branch ID</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sales.map((sale) => (
            <StyledTableRow key={sale.saleID}>
              <StyledTableCell component="th" scope="row">
                {sale.quantity}
              </StyledTableCell>
              <StyledTableCell>{sale.totalPrice}</StyledTableCell>
              <StyledTableCell align="right">{sale.productID}</StyledTableCell>
              <StyledTableCell align="right">{sale.branchID}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  onClick={() => onEditSale(sale)}
                  color="primary"
                  variant="contained"
                  startIcon={<EditIcon />}
                  sx={{ marginRight: 2, backgroundColor: 'green' }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => onDeleteSale(sale.saleID)}
                  color="error"
                  variant="contained"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesTable;
