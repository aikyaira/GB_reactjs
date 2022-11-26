import React from "react";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import styles from "./styles/styles.module.css";

export default function LeftSidebar() {
  return (
    <Paper elevation={3} square={true} className={styles.container}>
      <MenuList className={styles.leftMenu}>
        <MenuItem className={styles.leftMenu}>Profile</MenuItem>
        <MenuItem className={styles.leftMenu}>My account</MenuItem>
        <MenuItem className={styles.leftMenu}>Logout</MenuItem>
      </MenuList>
    </Paper>
  );
}
