import React, { useState } from "react";
import img from "../assets/img.png";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const validateLogin = (username, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      const user = storedUsers.find(
        (user) => user.Name === username && user.Password === password
      );
      return user !== undefined;
    }
    return false;
  };

  const handleLogin = () => {
    if (validateLogin(identifier, password)) {
      setError("");
      localStorage.setItem("loggedInUser", identifier); // Save username to local storage
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex px-3 py-2">
      <div className="flex flex-col gap-2 w-1/2 py-4 mt-20 ml-9">
        <img src="../assets/logo.jpeg" alt="logo" />
        <h1 className="text-3xl font-bold">Inventory Management System</h1>

        <Typography
          sx={{
            color: "gray",
            fontSize: "15px",
            mb: 2,
            alignContent: "center",
            marginLeft: 5,
          }}
        >
          Welcome! Please enter Username and password to login
        </Typography>
        <TextField
          id="identifier"
          label="Username"
          variant="outlined"
          sx={{ width: "500px", mb: 2, mt: 4 }}
          value={identifier}
          onChange={(e) => handleInputChange(e, setIdentifier)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          sx={{ width: "500px", mb: 2 }}
          value={password}
          onChange={(e) => handleInputChange(e, setPassword)}
        />
        {error && <Typography sx={{ color: "red", mb: 2 }}>{error}</Typography>}
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          sx={{
            width: "500px",
            mb: 2,
            backgroundColor: "orange",
            textTransform: "none",
          }}
        >
          LOGIN
        </Button>
      </div>

      <div className="w-1/2 relative">
        <img className="w-[700px]" src={img} alt="illustration" />
      </div>
    </div>
  );
};

export default LandingPage;
