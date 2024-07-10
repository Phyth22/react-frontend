import React from "react";
import Card from "./WrapperCard";
// import BiaxialLineChart from "./Lines";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const DashboardContent = () => {
  return (
    <div>
      <Card className="--w-[1159px] w-full --h-[100px] --top-[126px] --left-[325px] gap-0  bg-white">
        <div className="flex flex-col justify-between  md:flex-row">
          <div className="flex flex-col">
            <h4
              className="font-inter  font-extrabold "
              style={{ fontSize: "15px" }}
            >
              Inventory Management System
            </h4>
            <Typography
              className="font-inter  font-semibold text-left "
              style={{ leading: "14.52px", fontSize: "13px" }}
            >
              Wise Asset Management
            </Typography>
          </div>

          <div className="flex justify-start md:justify-end  ">
            <Button
              variant="contained"
              style={{
                marginRight: "8px",
                borderRadius: "30px",
                height: "40px",
                width: "140px",
                backgroundColor: "white",
                textTransform: "lowercase",
                alignItems: "center",
              }}
            >
              <AccountBalanceOutlinedIcon
                style={{ marginRight: "3px", color: "black" }}
              />{" "}
              <span
                style={{ marginTop: "5px", fontSize: "12px", color: "purple" }}
              >
                Sales: All
              </span>
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "30px",
                height: "40px",
                width: "140px",
                backgroundColor: "white",
                textTransform: "lowercase",
              }}
            >
              <CalendarMonthIcon
                style={{ marginRight: "10px", color: "black" }}
              />
              <span
                style={{ marginTop: "5px", fontSize: "12px", color: "purple" }}
              >
                Last 30 Days
              </span>
            </Button>
          </div>
        </div>
      </Card>

      <div className="--flex --flex-row --items-center grid grid-cols-1 place-items-center md:grid-cols-4 gap-4 --space-x-4 mb-[20px] mt-6">
        <Card className="--left-326px bg-white w-full --w-[220px]">
          <h2
            className="font-inter font-bold text-left "
            style={{ fontSize: "18px", lineHeight: "24.2px" }}
          >
            Users
          </h2>
          <div className="flex space-x-11">
            <p className="font-roboto text-2xl font-bold">5</p>
            <Button
              style={{
                backgroundColor: " #ACE4CF",
                color: "green",
                borderRadius: "8px",
                width: "60px",
                height: "25px",
                top: "5px",
                fontSize: "16px",
                lineHeight: "18.75px",
                left: "10px",
              }}
            >
              2%
            </Button>
          </div>
        </Card>

        <Card className="--left-622px bg-white w-full --w-[220px]">
          <h2
            className="font-inter font-bold text-left"
            style={{ fontSize: "18px", lineHeight: "24.2px" }}
          >
            Branches
          </h2>
          <div className="flex space-x-11">
            <p className="font-roboto text-2xl font-bold">6</p>
            <Button
              className="font-bold"
              style={{
                color: "red",
                backgroundColor: "#FEA2A2",
                borderRadius: "8px",
                width: "60px",
                height: "25px",
                top: "5px",
                fontSize: "16px",
                lineHeight: "18.75px",
                left: "10px",
              }}
            >
              3%
            </Button>
          </div>
        </Card>

        <Card className="--left-918px w-full bg-white">
          <h2
            className="font-inter font-bold text-left"
            style={{ fontSize: "18px", lineHeight: "24.2px" }}
          >
            Sales
          </h2>
          <div className="flex space-x-11">
            <p className="font-roboto text-2xl font-bold">120</p>
            <Button
              className="font-bold"
              style={{
                backgroundColor: " #FFE4BBB2",
                color: "orange",
                borderRadius: "8px",
                width: "60px",
                height: "25px",
                top: "5px",
                fontSize: "16px",
                lineHeight: "18.75px",
                left: "10px",
              }}
            >
              66%
            </Button>
          </div>
        </Card>
        <Card className="--left-1214px bg-white w-full --w-[220px]">
          <h2
            className="font-inter font-bold text-left"
            style={{ fontSize: "18px", lineHeight: "24.2px" }}
          >
            Products
          </h2>
          <div className="flex space-x-11">
            <p className="font-roboto text-2xl font-bold">63</p>
            <Button
              style={{
                backgroundColor: " #FFE4BBB2",
                color: "orange",
                borderRadius: "8px",
                width: "60px",
                height: "25px",
                top: "5px",
                fontSize: "16px",
                lineHeight: "18.75px",
                left: "10px",
              }}
            >
              38%
            </Button>
          </div>
        </Card>
      </div>

      <div className="mt-4">
        <Card
          className="--w-[930px] h-[413px] --top-[822px] --left-[326px]  border-[1px] gap-0 w-full bg-white"
          style={{ fontSize: "18px", lineHeight: "24.2px" }}
        >
          <Typography>Recent </Typography>
        </Card>
      </div>
    </div>
  );
};
export default DashboardContent;
