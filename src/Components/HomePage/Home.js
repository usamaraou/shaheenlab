import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavBar from "../Navbar/NavBar";
import TestTable from "../Test/TestTable";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Invoice from "../Invoice/Invoice";
import Customer from "../Customer/Customer";

import Reports from "../Reports/Reports";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(0.5),
    // textAlign: "",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <NavBar />
        <Grid container>
          <Grid item xs={3} sm={2}>
            <Item>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  height: "100%",
                  flexGrow: 1,
                }}
              >
                <Tab label="Test" {...a11yProps(0)} />
                <Tab label="Customer" {...a11yProps(1)} />
                <Tab label="Invoice" {...a11yProps(2)} />
                <Tab label="Reports" {...a11yProps(3)} />
              </Tabs>
            </Item>
          </Grid>
          <Grid item xs={9} sm={10}>
            <Box sx={{ width: "100%" }}>
              <TabPanel value={value} index={0}>
                <TestTable />
              </TabPanel>
            </Box>

            <Box sx={{ width: "100%" }}>
              <TabPanel value={value} index={1}>
                <Customer />
              </TabPanel>
            </Box>

            <Box sx={{ width: "100%" }}>
              <TabPanel value={value} index={2}>
                <Invoice />
              </TabPanel>
            </Box>
            <Box sx={{ width: "100%" }}>
              <TabPanel value={value} index={3}>
                <Reports/>
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
