import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import SalesTable from "./salesTable";
import EditSales from "./editSales";
import AddSales from "./addSales";

const Sales = () => {
  const [sales, setSales] = useState([
    {
      quantity: 5,
      totalPrice: 49.95,
      productID: "PROD001",
      branchID: "B001",
    },
    {
      quantity: 3,
      totalPrice: 29.97,
      productID: "PROD002",
      branchID: "B002",
    },
    // Add more sales data as needed
  ]);

  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

  const handleOpenAddDialog = () => {
    setAddDialogOpen(true);
  };

  const handleCloseAddDialog = () => {
    setAddDialogOpen(false);
  };

  const handleOpenEditDialog = (sale) => {
    setSelectedSale(sale);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
    setSelectedSale(null);
  };

  const handleAddSale = (newSale) => {
    setSales((prevSales) => [...prevSales, newSale]);
    handleCloseAddDialog();
  };

  const handleEditSale = (editedSale) => {
    setSales((prevSales) =>
      prevSales.map((sale) =>
        sale.productID === editedSale.productID ? editedSale : sale
      )
    );
    handleCloseEditDialog();
  };

  const handleDeleteSale = (productID) => {
    setSales((prevSales) =>
      prevSales.filter((sale) => sale.productID !== productID)
    );
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Sales List
      </Typography>
      <Button onClick={handleOpenAddDialog} variant="contained" color="primary">
        Add Sale
      </Button>
      <SalesTable
        sales={sales}
        onEditSale={handleOpenEditDialog}
        onDeleteSale={handleDeleteSale}
      />
      <AddSales
        open={addDialogOpen}
        onClose={handleCloseAddDialog}
        onAddSale={handleAddSale}
      />
      {selectedSale && (
        <EditSales
          open={editDialogOpen}
          onClose={handleCloseEditDialog}
          onEditSale={handleEditSale}
          sale={selectedSale}
        />
      )}
    </div>
  );
};

export default Sales;
