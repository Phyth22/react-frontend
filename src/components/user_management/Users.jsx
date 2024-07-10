import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
// import UserTable from "./UserTable";

import AddUser from "./addUser";
import UserTable from "./userTable";
import EditUser from "./editUser";

const userData = [
  {
    UserID: "US0002",
    Name: "Emmanuel",
    Email: "emmanuel@gmail.com",
    Contact: "+256706841934",
    Gender: "Male",
    Address: "Kampala, Uganda",
    Password: "dummyPassword123",
    BranchID: "B001",
    Image: "path/to/image",
    Role: "Store Manager",
    isActive: true,
    Notes: "Lorem ipsum",
  },
  {
    UserID: "US0001",
    Name: "Brian Kakooza",
    Email: "brian@gmail.com",
    Contact: "+256788841234",
    Gender: "Male",
    Address: "Kampala, Uganda",
    Password: "dummyPassword123",
    BranchID: "B002",
    Image: "path/to/image",
    Role: "Operations Manager",
    isActive: true,
    Notes: "Lorem ipsum",
  },
  // Add more user data as needed
];

const generateUserId = (lastId) => {
  return `US${(lastId + 1).toString().padStart(4, "0")}`;
};

const Users = () => {
  const [users, setUsers] = useState(userData);
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
      setFilteredUsers(storedUsers);
    }
  }, []);

  const handleOpenAddDialog = () => setOpenAddDialog(true);
  const handleCloseAddDialog = () => setOpenAddDialog(false);
  const handleOpenEditDialog = (index) => {
    setEditIndex(index);
    setOpenEditDialog(true);
  };
  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setEditIndex(null);
  };

  const handleAddUser = (newUser) => {
    const updatedUsers = [newUser, ...users];
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    handleCloseAddDialog();
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = updatedUser;
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    handleCloseEditDialog();
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        className="flex flex-col sm:flex-row justify-between items-center"
      >
        <Typography
          sx={{ fontSize: "18px", marginBottom: "10px" }}
          variant="h6"
        >
          Users
        </Typography>
        <Button
          onClick={handleOpenAddDialog}
          variant="contained"
          style={{
            backgroundColor: "purple",
            textTransform: "capitalize",
            fontFamily: "inter",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        >
          Add User
        </Button>
      </Grid>

      <Grid item xs={12}>
        {filteredUsers.length > 0 && (
          <UserTable
            rows={filteredUsers}
            handleOpenEditDialog={handleOpenEditDialog}
            handleDeleteUser={handleDeleteUser}
            style={{ fontFamily: "inter" }}
          />
        )}
      </Grid>

      <AddUser
        userId={generateUserId(users.length)}
        open={openAddDialog}
        onClose={handleCloseAddDialog}
        onAddUser={handleAddUser}
      />
      {openEditDialog && (
        <EditUser
          open={openEditDialog}
          onClose={handleCloseEditDialog}
          onSave={handleUpdateUser}
          user={users[editIndex]}
        />
      )}
    </Grid>
  );
};

export default Users;
