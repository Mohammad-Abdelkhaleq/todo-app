import { ListContext } from '../../../context/ListContext.jsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';





import * as React from 'react';

import Modal from '@mui/material/Modal';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const defaultTheme = createTheme();

export default function BasicModal() {

    const { addItem, deleteItem, toggleComplete, list, incompleteCount, incomplete, defaultValues, isloggedin, setIsloggedin, openLogginForm, setOpenLogginForm, openSignupForm, setOpenSignupForm, userData, setUserData,        signedUpUsers, setSignedUpUsers, } = useContext(ListContext);
    const handleClose = () => setOpenLogginForm(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = {    
            username: event.target.username.value,
            password: event.target.password.value,
        }
        if (signedUpUsers.length > 0) {
            signedUpUsers.forEach(user => {
                if (user.username === formData.username && user.password === formData.password) {
                    setUserData(user);
                    setIsloggedin(true);
                    
                }
            });
        }else{
            alert('no users');
        }
       
      };


    return (
        <div>
            


                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item>
                                    <Link to="/signup" variant="body2">sign up</Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                      
                    </Container>
                </ThemeProvider>
      
        </div>
    );
}
