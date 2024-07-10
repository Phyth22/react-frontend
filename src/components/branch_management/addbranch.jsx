import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const AddBranch = ({ open, onClose, onAddBranch, branchId }) => {
  const [newBranch, setNewBranch] = useState({
    BranchID: branchId,
    Name: "",
    PersonInCharge: "",
    Location: "",
    TotalSales: "",
  });

  const [errors, setErrors] = useState({
    Name: false,
    PersonInCharge: false,
    Location: false,
    TotalSales: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewBranch((prevBranch) => ({
      ...prevBranch,
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

    Object.entries(newBranch).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = true;
        hasError = true;
      }
    });

    if (!hasError) {
      onAddBranch(newBranch);
      setNewBranch({
        BranchID: "",
        Name: "",
        PersonInCharge: "",
        Location: "",
        TotalSales: "",
      });
      onClose();
    } else {
      setErrors(newErrors);
    }
  };

  useEffect(() => {
    setNewBranch({
      ...newBranch,
      BranchID: branchId,
    });
  }, [branchId]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Branch</DialogTitle>
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
            value={newBranch.Name}
            onChange={handleChange}
            error={errors.Name}
            helperText={errors.Name && "Name is required"}
          />
          <TextField
            margin="dense"
            id="PersonInCharge"
            name="PersonInCharge"
            label="Person in Charge"
            type="text"
            fullWidth
            variant="outlined"
            value={newBranch.PersonInCharge}
            onChange={handleChange}
            error={errors.PersonInCharge}
            helperText={errors.PersonInCharge && "Person in Charge is required"}
          />
          <TextField
            margin="dense"
            id="Location"
            name="Location"
            label="Location"
            type="text"
            fullWidth
            variant="outlined"
            value={newBranch.Location}
            onChange={handleChange}
            error={errors.Location}
            helperText={errors.Location && "Location is required"}
          />
          <TextField
            margin="dense"
            id="TotalSales"
            name="TotalSales"
            label="Total Sales"
            type="text"
            fullWidth
            variant="outlined"
            value={newBranch.TotalSales}
            onChange={handleChange}
            error={errors.TotalSales}
            helperText={errors.TotalSales && "Total Sales is required"}
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

export default AddBranch;
