import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditSales = ({ open, onClose, onEditSales, sales }) => {
  const [editedSales, setEditedSales] = useState({ ...sales });

  useEffect(() => {
    setEditedSales({ ...sales });
  }, [sales]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedSales((prevSales) => ({
      ...prevSales,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEditSales(editedSales);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Sales</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="quantity"
          name="quantity"
          label="Quantity"
          type="number"
          fullWidth
          variant="outlined"
          value={editedSales.quantity}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="totalPrice"
          name="totalPrice"
          label="Total Price"
          type="number"
          fullWidth
          variant="outlined"
          value={editedSales.totalPrice}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="productID"
          name="productID"
          label="Product ID"
          type="text"
          fullWidth
          variant="outlined"
          value={editedSales.productID}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="branchID"
          name="branchID"
          label="Branch ID"
          type="text"
          fullWidth
          variant="outlined"
          value={editedSales.branchID}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleSave} sx={{ color: "green" }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditSales;
