// import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-scroll";
import { Brightness4, Brightness7 } from "@mui/icons-material"; // Icons for dark/light mode

export default function Header({ toggleTheme, darkMode }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>RSP</Typography>

        <Link to="projects" smooth={true} duration={800}>
          <Button color="inherit">Projects</Button>
        </Link>

        <Link to="skills" smooth={true} duration={800}>
          <Button color="inherit">Skills</Button>
        </Link>

        <Link to="contact" smooth={true} duration={800}>
          <Button color="inherit">Contact</Button>
        </Link>

        {/* Dark Mode Toggle Button */}
        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
