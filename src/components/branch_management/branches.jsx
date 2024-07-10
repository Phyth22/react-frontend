import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import BranchTable from "./branchtable";
import EditBranch from "./editbranch";
import AddBranch from "./addbranch";

const branchData = [
  {
    BranchID: "B001",
    Name: "Main Branch",
    PersonInCharge: "John Doe",
    Location: "New York, USA",
    TotalSales: "$500,000",
  },
  {
    BranchID: "B002",
    Name: "Downtown Branch",
    PersonInCharge: "Jane Smith",
    Location: "Los Angeles, USA",
    TotalSales: "$300,000",
  },
  // Add more branch data as needed
];

const generateBranchId = (lastId) => {
  return "B00" + (lastId + 1);
};

const Branches = () => {
  const [branches, setBranches] = useState(branchData);
  const [filteredBranches, setFilteredBranches] = useState(branches);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedBranches = JSON.parse(localStorage.getItem("branches"));
    if (storedBranches) {
      setBranches(storedBranches);
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

  const handleAddBranch = (newBranch) => {
    const updatedBranches = [...branches, newBranch];
    setBranches(updatedBranches);
    setFilteredBranches(updatedBranches); // Update filteredBranches as well
    localStorage.setItem("branches", JSON.stringify(updatedBranches));
    handleCloseAddDialog();
  };
  const handleUpdateBranch = (updatedBranch) => {
    const updatedBranches = [...branches];
    updatedBranches[editIndex] = updatedBranch;
    setBranches(updatedBranches);
    setFilteredBranches(updatedBranches);
    localStorage.setItem("branches", JSON.stringify(updatedBranches));
    handleCloseEditDialog();
  };

  const handleDeleteBranch = (index) => {
    const updatedBranches = [...branches];
    updatedBranches.splice(index, 1);
    setBranches(updatedBranches);
    setFilteredBranches(updatedBranches);
    localStorage.setItem("branches", JSON.stringify(updatedBranches));
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
          Branches
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
          Add Branch
        </Button>
      </Grid>

      <Grid item xs={12}>
        {branches.length > 0 && (
          <BranchTable
            rows={filteredBranches}
            handleOpenEditDialog={handleOpenEditDialog}
            handleDeleteBranch={handleDeleteBranch}
            style={{ fontFamily: "inter" }}
          />
        )}
      </Grid>

      <AddBranch
        branchId={generateBranchId(branches.length - 1)}
        open={openAddDialog}
        onClose={handleCloseAddDialog}
        onAddBranch={handleAddBranch}
      />
      {openEditDialog && (
        <EditBranch
          open={openEditDialog}
          onClose={handleCloseEditDialog}
          onSave={handleUpdateBranch}
          branch={branches[editIndex]}
        />
      )}
    </Grid>
  );
};

export default Branches;
