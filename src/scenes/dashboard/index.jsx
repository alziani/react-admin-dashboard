import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

function Dashboard() {
  return (
    <Box m="70px">
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
    </Box>
  );
}

export default Dashboard;
