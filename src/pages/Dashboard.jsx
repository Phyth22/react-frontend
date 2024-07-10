import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GroupsIcon from "@mui/icons-material/Groups";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorIcon from "@mui/icons-material/Error";
import Badge from "@mui/material/Badge";
import { PiGitBranchDuotone } from "react-icons/pi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdBusAlert } from "react-icons/md";

const drawerWidth = 250;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [identifier, setIdentifier] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIdentifier(loggedInUser);
    } else {
      setIdentifier("Default Username");
    }
  }, []);

  let sideBarItems = [
    {
      icon: <DashboardIcon style={{ color: "purple" }} />,
      text: "Dashboard  ",
      route: "/dashboard",
    },

    {
      icon: (
        <GroupsIcon
          style={{ color: "purple", marginRight: "4px", fontSize: 28 }}
        />
      ),
      text: "User Management",
      route: "/dashboard/users",
    },

    {
      icon: (
        <PiGitBranchDuotone
          style={{ color: "purple", marginRight: "4px", fontSize: 28 }}
        />
      ),
      text: "Branch Management",
      route: "/dashboard/branches",
    },

    {
      icon: (
        <MdOutlineProductionQuantityLimits
          style={{ color: "purple", marginRight: "4px", fontSize: 28 }}
        />
      ),
      text: "Sales Management",
      route: "/dashboard/sales",
    },

    {
      icon: <MdBusAlert style={{ color: "purple", fontSize: 28 }} />,
      text: "Products",
      route: "/dashboard/products",
    },
  ];

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: 2,
          marginBottom: 2,
          borderColor: "white",
        }}
      >
      {/* system logo section */}
        <img
          src="../assets/logo.jpeg"
          alt="system Logo"
          style={{
            width: "120px",
            height: "60px",
            marginBottom: "8px",
            marginRight: "8px",
          }}
        />
      </Box>

      <List>
        {sideBarItems.map((item) => (
          <div style={{ color: "black" }} key={item.text}>
            {item.children ? (
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  borderLeft: "none",
                  boxShadow: "none",
                  color: "black",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    style={{ color: "black", fontSize: "12px" }}
                    primary={item.text}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {item.children.map((childItem) => (
                      <ListItemButton
                        key={childItem.text}
                        component={Link}
                        to={childItem.route}
                        sx={{
                          width: "280px",
                          py: 1,
                          pl: 3,
                          ":hover": {
                            backgroundColor: "rgba(128, 128, 128, 0.5)",
                          },

                          ":active": {
                            backgroundColor: "rgba(128, 128, 128, 0.5)",
                          },
                        }}
                      >
                        <ListItemIcon>{childItem.icon}</ListItemIcon>
                        <ListItemText
                          primary={childItem.text}
                          style={{ fontSize: "12px", color: "black" }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItemButton component={Link} to={item.route}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ fontSize: "12px", color: "black" }}
                />
              </ListItemButton>
            )}
          </div>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <div className="flex justify-between w-full --md:justify-end items-center">
          <Toolbar className="flex w-full  justify-between items-center">
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <div className="flex justify-between ">
              <Typography variant="h6" style={{ color: "BLACK", fontSize: 14 }}>
                INVENTORY MANAGEMENT SYSTEM
              </Typography>
              <Typography
                sx={{ color: "orange", marginLeft: 65, fontWeight: "bold" }}
              >
                Welcome, {identifier}
              </Typography>
              <Avatar
                style={{
                  tabSize: "10px",
                  backgroundColor: "purple",
                  width: "26px",
                  height: "26px",
                  gap: "0px",
                  marginLeft: "25px",
                  cursor: "pointer",
                }}
              />
            </div>
          </Toolbar>
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "300px",
              height: "100vh", // height to cover the entire viewport
              backgroundColor: "purple", // Background color
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "calc(100vh)",
              backgroundColor: "#F2F3F4", //sidebar color
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100dvh",
          backgroundColor: " #B19CD9", // background color  purple
        }}
      >
        <Box
          sx={{
            backgroundColor: " #B19CD9",
            p: 3,
            borderRadius: 2,
            minHeight: "100dvh",
            width: "100%",
          }}
        >
          <Toolbar />
          {/* The Dynamic View */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
export default Dashboard;
