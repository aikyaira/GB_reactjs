import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./styles/styles.module.css";

export default function Message(props) {
  return (
    <Typography variant="p" component="p" className={styles.contentHeader}>
      {props.text}
    </Typography>
  );
}
