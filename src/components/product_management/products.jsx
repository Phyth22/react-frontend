import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import ProductsTable from "./productsTable";
import AddProduct from "./addProduct";
import EditProduct from "./editProduct";

const Products = () => {
  const [products, setProducts] = useState([
    {
      name: "Product 1",
      description: "Description for product 1",
      price: 9.99,
      stockID: "STK123",
      branchID: "BR001",
    },
    {
      name: "Product 2",
      description: "Description for product 2",
      price: 19.99,
      stockID: "STK124",
      branchID: "BR002",
    },
    {
      name: "Product 3",
      description: "Description for product 3",
      price: 29.99,
      stockID: "STK125",
      branchID: "BR003",
    },
    {
      name: "Product 4",
      description: "Description for product 4",
      price: 39.99,
      stockID: "STK126",
      branchID: "BR004",
    },
    {
      name: "Product 5",
      description: "Description for product 5",
      price: 49.99,
      stockID: "STK127",
      branchID: "BR005",
    },
  ]);

  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenAddDialog = () => {
    setAddDialogOpen(true);
  };

  const handleCloseAddDialog = () => {
    setAddDialogOpen(false);
  };

  const handleOpenEditDialog = (product) => {
    setSelectedProduct(product);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
    setSelectedProduct(null);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    handleCloseAddDialog();
  };

  const handleEditProduct = (editedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.stockID === editedProduct.stockID ? editedProduct : product
      )
    );
    handleCloseEditDialog();
  };

  const handleDeleteProduct = (stockID) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.stockID !== stockID)
    );
  };

  return (
    <div>
        <div>
      <Typography variant="h6" gutterBottom>
        Products List
      </Typography>
      <Button onClick={handleOpenAddDialog} variant="contained" color="primary">
        Add Product
      </Button>
      </div>
      <ProductsTable
        products={products}
        onEditProduct={handleOpenEditDialog}
        onDeleteProduct={handleDeleteProduct}
      />
      <AddProduct
        open={addDialogOpen}
        onClose={handleCloseAddDialog}
        onAddProduct={handleAddProduct}
      />
      {selectedProduct && (
        <EditProduct
          open={editDialogOpen}
          onClose={handleCloseEditDialog}
          onEditProduct={handleEditProduct}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default Products;
