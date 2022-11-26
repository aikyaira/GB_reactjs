import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import styles from "./styles/styles.module.css";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.menu}>
    <AppBar position="static">
      <Toolbar className={styles.header}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GB React.js
        </Typography>

      </Toolbar>
    </AppBar>
  </Box>
  );
}
