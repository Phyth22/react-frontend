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

function UserTable({ rows, handleOpenEditDialog, handleDeleteUser }) {
  const [users, setUsers] = useState(rows);

  const navigate = useNavigate();

  useEffect(() => {
    setUsers(rows);
  }, [rows]);

  

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell align="right">User ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Branch ID</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell align="right">{user.UserID}</TableCell>
                <TableCell align="right">
                  {user.Name}
                </TableCell>
                <TableCell align="right">{user.Email}</TableCell>
                <TableCell align="right">{user.Contact}</TableCell>
                <TableCell
                  align="right"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMemberDetails(user.UserID, user)}
                >
                  {user.BranchID}
                </TableCell>
                <TableCell align="right">{user.Role}</TableCell>
                <TableCell align="right">
                  <Button variant="contained"
                    onClick={() => handleOpenEditDialog(index)}
                    sx={{ backgroundColor: "green", textTransform:"none", marginRight:"5px" }}
                  >
                    Edit
                  </Button>
                  <Button variant="contained"  sx={{  textTransform:"none" }} onClick={() => handleDeleteUser(index)} color="error">
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

export default UserTable;
