import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditBranch = ({ open, onClose, onSave, branch }) => {
  const [editedBranch, setEditedBranch] = useState({
    BranchID: "",
    Name: "",
    PersonInCharge: "",
    Location: "",
    TotalSales: "",
  });

  useEffect(() => {
    // Update editedBranch state with the selected branch when dialog opens
    if (branch) {
      setEditedBranch(branch);
    }
  }, [branch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedBranch((prevBranch) => ({
      ...prevBranch,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedBranch);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Branch</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="Name"
          name="Name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={editedBranch.Name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="PersonInCharge"
          name="PersonInCharge"
          label="Person in Charge"
          type="text"
          fullWidth
          variant="outlined"
          value={editedBranch.PersonInCharge}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="Location"
          name="Location"
          label="Location"
          type="text"
          fullWidth
          variant="outlined"
          value={editedBranch.Location}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="TotalSales"
          name="TotalSales"
          label="Total Sales"
          type="text"
          fullWidth
          variant="outlined"
          value={editedBranch.TotalSales}
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

export default EditBranch;
