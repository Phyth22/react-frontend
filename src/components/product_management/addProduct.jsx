import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddProduct = ({ open, onClose, onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stockID: "",
    branchID: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    description: false,
    price: false,
    stockID: false,
    branchID: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
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

    Object.entries(newProduct).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = true;
        hasError = true;
      }
    });

    if (!hasError) {
      onAddProduct(newProduct);
      setNewProduct({
        name: "",
        description: "",
        price: "",
        stockID: "",
        branchID: "",
      });
      onClose();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={newProduct.name}
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name && "Name is required"}
        />
        <TextField
          margin="dense"
          id="description"
          name="description"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          value={newProduct.description}
          onChange={handleChange}
          error={errors.description}
          helperText={errors.description && "Description is required"}
        />
        <TextField
          margin="dense"
          id="price"
          name="price"
          label="Price"
          type="number"
          fullWidth
          variant="outlined"
          value={newProduct.price}
          onChange={handleChange}
          error={errors.price}
          helperText={errors.price && "Price is required"}
        />
        <TextField
          margin="dense"
          id="stockID"
          name="stockID"
          label="Stock ID"
          type="text"
          fullWidth
          variant="outlined"
          value={newProduct.stockID}
          onChange={handleChange}
          error={errors.stockID}
          helperText={errors.stockID && "Stock ID is required"}
        />
        <TextField
          margin="dense"
          id="branchID"
          name="branchID"
          label="Branch ID"
          type="text"
          fullWidth
          variant="outlined"
          value={newProduct.branchID}
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

export default AddProduct;
