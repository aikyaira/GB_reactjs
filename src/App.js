import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "./components/styles/styles.module.css";
import TextField from "@mui/material/TextField";
import Message from "./components/Message";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
function App() {
  const [text, setArr] = useState("just a message");

  return (
    <Container fixed>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <LeftSidebar />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>
            <Paper elevation={3} square={true} className={styles.container}>
              <Container>
                <Typography
                  variant="h4"
                  component="p"
                  className={styles.contentHeader}
                >
                  Type something here to see magic!
                </Typography>

                <TextField
                  id="outlined-basic"
                  label="Your text"
                  variant="outlined"
                  onChange={(e) => setArr(e.target.value)}
                />
                <Message text={text} />
              </Container>
            </Paper>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
