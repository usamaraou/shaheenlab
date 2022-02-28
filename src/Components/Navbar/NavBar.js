import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

export default function NavBar() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        // padding: theme.spacing(0.5),
        // textAlign: "",
        color: theme.palette.text.secondary,
      }));
    return (
        <>
              <Grid container>
          <Grid item xs={12}>
            <Item>
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                  <Toolbar>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      Shaheen Medical Labs
                    </Typography>
                  </Toolbar>
                </AppBar>
              </Box>
            </Item>
          </Grid>
        </Grid>
        </>
    );
}