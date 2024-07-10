import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditUser = ({ open, onClose, onSave, staff }) => {
  const [editedStaff, setEditedStaff] = useState({
    UserID: "",
    Name: "",
    Email: "",
    Contact: "",
    BranchID: "",
    Role: "",
    isActive: true,
    UserType: "Staff",
  });

  useEffect(() => {
    // Update editedStaff state with the selected staff when dialog opens
    if (staff) {
      setEditedStaff(staff);
    }
  }, [staff]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedStaff((prevStaff) => ({
      ...prevStaff,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedStaff);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Staff Member</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="Name"
          name="Name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={editedStaff.Name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="Email"
          name="Email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={editedStaff.Email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="Contact"
          name="Contact"
          label="Contact"
          type="text"
          fullWidth
          variant="outlined"
          value={editedStaff.Contact}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="BranchID"
          name="BranchID"
          label="Branch ID"
          type="text"
          fullWidth
          variant="outlined"
          value={editedStaff.BranchID}
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
          value={editedStaff.Role}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUser;
