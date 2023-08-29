// function Footer(props) {
//     return <footer>&copy; 2023 mike tyson </footer>;// the copy right symbol is &copy; and the year is 2018
//   }

//   export default Footer;

//whos is mike tyson and why is he copy righting my code?
//he is a boxer and he is copy righting your code because he is a boxer and he can do what ever he wants
//you god damn right he is 


import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        marginTop: 'calc(10% + 60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
           mohammad 
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}