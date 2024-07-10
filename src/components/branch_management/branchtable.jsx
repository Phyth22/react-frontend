import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function BranchTable({ rows, handleOpenEditDialog, handleDeleteBranch }) {
  const [branches, setBranches] = useState(rows);

  const navigate = useNavigate();

  useEffect(() => {
    setBranches(rows);
  }, [rows]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="branch table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Branch ID</TableCell>
              <TableCell align="right">Branch Name</TableCell>
              <TableCell align="right">Person in Charge</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Total Sales</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branches.map((branch, index) => (
              <TableRow key={index}>
                <TableCell align="right">{branch.BranchID}</TableCell>
                <TableCell align="right">{branch.Name}</TableCell>
                <TableCell align="right">{branch.PersonInCharge}</TableCell>
                <TableCell align="right">{branch.Location}</TableCell>
                <TableCell align="right">{branch.TotalSales}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleOpenEditDialog(index)}
                    sx={{
                      backgroundColor: "green",
                      textTransform: "none",
                      marginRight: "8px",
                    }}
                    variant="contained"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteBranch(index)}
                    color="error"
                    variant="contained"
                    sx={{ textTransform: "none" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BranchTable;
