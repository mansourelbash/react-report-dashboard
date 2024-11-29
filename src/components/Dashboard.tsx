import React from "react";
import { Grid, Box } from "@mui/material";
import PieChartComponent from "../charts/PieChartComponent";
import BarChartHorizontal from "../charts/BarChartHorizontal";
import BarChartVertical from "../charts/BarChartVertical";
import LineChartComponent from "../charts/LineChartComponent";
import {
  pieData,
  horizontalBarData,
  verticalBarData,
  lineData,
} from "../data/dummyData";
import { Button, Card, Sidebar } from "flowbite-react";
import { TableComponent } from "./Table";
import { TimelineComponent } from "./Timeline";
import NavbarWithThemeToggle from "./NavbarWithThemeToggle";
import SidebarComponent from "./SidebarComponent";

const Dashboard: React.FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <NavbarWithThemeToggle />
    </Grid>
    <Grid item xs={2}>
      <Box sx={{ p: 0, borderRight: 1, borderColor: '#E5E7EB' }}  style={{ height: '100vh' }}> 
       <SidebarComponent />
      </Box>
    </Grid>
    <Grid item xs={8}>
      <Box sx={{ p: 10 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={6}>
            <Card >
              <PieChartComponent data={pieData} />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card >
              <BarChartHorizontal data={horizontalBarData} />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card >
              <BarChartVertical data={verticalBarData} />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card >
              <LineChartComponent data={lineData} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card >
              <TableComponent />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card >
              <TimelineComponent />
            </Card>
          </Grid>
          
        </Grid>
      </Box>
    </Grid>
  </Grid>
);

export default Dashboard;
