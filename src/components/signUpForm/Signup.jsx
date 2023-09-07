import { ListContext } from '../../context/ListContext.jsx';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';






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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const defaultTheme = createTheme();

export default function SignUp() {

    const { addItem, deleteItem, toggleComplete, list, incompleteCount, incomplete, defaultValues, isloggedin, setIsloggedin, openLogginForm, setOpenLogginForm, openSignupForm, setOpenSignupForm, userData, setUserData, signedUpUsers, setSignedUpUsers, } = useContext(ListContext);
    const handleClose = () => setOpenLogginForm(false);
    // function submitUserData(e) {
    //     e.preventDefault();
    //     let formData = {
    //         username: e.target.username.value,
    //         password: e.target.password.value,
    //         role: e.target.role.value,
    //     }
    //     setUserData(formData);
    //     setIsloggedin(true);
    //     // setOpenLogginForm(false);
    // }
    const [selectedRole, setSelectedRole] = useState('Role');
    const [formSubmitted, setFormSubmitted] = useState(false);

    // const history = useHistory();

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value); // Update the selected role when the dropdown changes
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = {
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value,
            role: selectedRole,

        }
        setSignedUpUsers([...signedUpUsers, formData]);
        // history.push('/');
        setFormSubmitted(true);

    };

    useEffect(() => {
        console.log(signedUpUsers);
    }, [signedUpUsers]);


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
                                Sign up
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
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
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
                                {/* add a drop-down list */}
                                <Select
                                    label="Role"
                                    value={selectedRole}
                                    onChange={handleRoleChange}
                                    fullWidth
                                    sx={{ mt: 1 }}
                                >
                                    <MenuItem value="admin">Admin</MenuItem>
                                    <MenuItem value="user">User</MenuItem>
                                </Select>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Submit
                                </Button>
                            </Box>
                            {formSubmitted && (
                                <Typography variant="body2" color="textSecondary">
                                    Successfully signed up.{' '}
                                    <Link to="/">Go to Home</Link>
                                </Typography>
                            )}
                        </Box>
                    </Container>
                </ThemeProvider>
        </div>
    );
}
