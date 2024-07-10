import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddSales = ({ open, onClose, onAddSales }) => {
  const [newSale, setNewSale] = useState({
    quantity: "",
    totalPrice: "",
    productID: "",
    branchID: "",
  });

  const [errors, setErrors] = useState({
    quantity: false,
    totalPrice: false,
    productID: false,
    branchID: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewSale((prevSale) => ({
      ...prevSale,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleAdd = () => {
    const newErrors = {};
    let hasError = false;

    Object.entries(newSale).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = true;
        hasError = true;
      }
    });

    if (!hasError) {
      onAddSales(newSale);
      setNewSale({
        quantity: "",
        totalPrice: "",
        productID: "",
        branchID: "",
      });
      onClose();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Sales</DialogTitle>
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
          value={newSale.quantity}
          onChange={handleChange}
          error={errors.quantity}
          helperText={errors.quantity && "Quantity is required"}
        />
        <TextField
          margin="dense"
          id="totalPrice"
          name="totalPrice"
          label="Total Price"
          type="number"
          fullWidth
          variant="outlined"
          value={newSale.totalPrice}
          onChange={handleChange}
          error={errors.totalPrice}
          helperText={errors.totalPrice && "Total Price is required"}
        />
        <TextField
          margin="dense"
          id="productID"
          name="productID"
          label="Product ID"
          type="text"
          fullWidth
          variant="outlined"
          value={newSale.productID}
          onChange={handleChange}
          error={errors.productID}
          helperText={errors.productID && "Product ID is required"}
        />
        <TextField
          margin="dense"
          id="branchID"
          name="branchID"
          label="Branch ID"
          type="text"
          fullWidth
          variant="outlined"
          value={newSale.branchID}
          onChange={handleChange}
          error={errors.branchID}
          helperText={errors.branchID && "Branch ID is required"}
        />
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

export default AddSales;
