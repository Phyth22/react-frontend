import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const AddUser = ({ open, onClose, onAddUser, userId }) => {
  const [newUser, setNewUser] = useState({
    UserID: userId,
    Name: "",
    Email: "",
    Contact: "",
    Gender: "",
    Address: "",
    Password: "",
    ConfirmPassword: "",
    BranchID: "",
    Image: "",
    Role: "",
    IsActive: false,
    Notes: "",
  });

  const [errors, setErrors] = useState({
    Name: false,
    Email: false,
    Contact: false,
    Gender: false,
    Address: false,
    Password: false,
    ConfirmPassword: false,
    BranchID: false,
    Image: false,
    Role: false,
    Notes: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleAdd = () => {
    const newErrors = {};
    let hasError = false;

    Object.entries(newUser).forEach(([key, value]) => {
      if (typeof value === "string" && !value.trim() && key !== "Image") {
        newErrors[key] = true;
        hasError = true;
      }
    });

    if (newUser.Email && !isValidEmail(newUser.Email)) {
      newErrors.Email = true;
      hasError = true;
    }

    if (newUser.Contact && !isValidPhoneNumber(newUser.Contact)) {
      newErrors.Contact = true;
      hasError = true;
    }

    if (newUser.Password !== newUser.ConfirmPassword) {
      newErrors.Password = true;
      newErrors.ConfirmPassword = true;
      hasError = true;
    }

    if (!hasError) {
      onAddUser(newUser);
      setNewUser({
        UserID: "",
        Name: "",
        Email: "",
        Contact: "",
        Gender: "",
        Address: "",
        Password: "",
        ConfirmPassword: "",
        BranchID: "",
        Image: "",
        Role: "",
        IsActive: false,

        Notes: "",
      });
      onClose();
    } else {
      setErrors(newErrors);
    }
  };

  useEffect(() => {
    setNewUser((prevUser) => ({
      ...prevUser,
      UserID: userId,
    }));
  }, [userId]);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{"Add User"}</DialogTitle>
      <DialogContent>
        <div className="flex flex-wrap gap-4">
          <TextField
            margin="dense"
            id="Name"
            name="Name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.Name}
            onChange={handleChange}
            error={errors.Name}
            helperText={errors.Name && "Name is required"}
          />
          <TextField
            margin="dense"
            id="Email"
            name="Email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={newUser.Email}
            onChange={handleChange}
            error={errors.Email}
            helperText={errors.Email && "Invalid email format"}
          />
          <TextField
            margin="dense"
            id="Contact"
            name="Contact"
            label="Contact"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.Contact}
            onChange={handleChange}
            error={errors.Contact}
            helperText={errors.Contact && "Invalid phone number format"}
          />
          <TextField
            margin="dense"
            id="Gender"
            name="Gender"
            label="Gender"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.Gender}
            onChange={handleChange}
            error={errors.Gender}
            helperText={errors.Gender && "Gender is required"}
          />
          <TextField
            margin="dense"
            id="Address"
            name="Address"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.Address}
            onChange={handleChange}
            error={errors.Address}
            helperText={errors.Address && "Address is required"}
          />
          <TextField
            margin="dense"
            id="Password"
            name="Password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={newUser.Password}
            onChange={handleChange}
            error={errors.Password}
            helperText={errors.Password && "Password is required"}
          />
          <TextField
            margin="dense"
            id="ConfirmPassword"
            name="ConfirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="outlined"
            value={newUser.ConfirmPassword}
            onChange={handleChange}
            error={errors.ConfirmPassword}
            helperText={errors.ConfirmPassword && "Passwords do not match"}
          />
          <TextField
            margin="dense"
            id="BranchID"
            name="BranchID"
            label="Branch ID"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.BranchID}
            onChange={handleChange}
            error={errors.BranchID}
            helperText={errors.BranchID && "Branch ID is required"}
          />
          <TextField
            margin="dense"
            id="Image"
            name="Image"
            label="Image URL"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.Image}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="Role"
            name="Role"
            label="Role"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.Role}
            onChange={handleChange}
            error={errors.Role}
            helperText={errors.Role && "Role is required"}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={newUser.IsActive}
                onChange={handleChange}
                name="IsActive"
                color="primary"
              />
            }
            label="Is Active"
          />

          <TextField
            margin="dense"
            id="Notes"
            name="Notes"
            label="Notes"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.Notes}
            onChange={handleChange}
            error={errors.Notes}
            helperText={errors.Notes && "Notes is required"}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleAdd} sx={{ color: "green" }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUser;
