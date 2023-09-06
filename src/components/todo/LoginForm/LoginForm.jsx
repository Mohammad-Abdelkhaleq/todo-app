import { ListContext } from '../../../context/ListContext.jsx';
import { useContext } from 'react';


import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function BasicModal() {

    const { addItem, deleteItem, toggleComplete, list, incompleteCount, incomplete, defaultValues, isloggedin, setIsloggedin, openLogginForm, setOpenLogginForm, openSignupForm, setOpenSignupForm, userData, setUserData, } = useContext(ListContext);
    const handleClose = () => setOpenLogginForm(false);
    function submitUserData(e) {
        e.preventDefault();
        let formData = {
            username: e.target.username.value,
            password: e.target.password.value,
            role: e.target.role.value,
        }
        setUserData(formData);
        setIsloggedin(true);
        // setOpenLogginForm(false);
    }


    return (
        <div>
            <Modal
                open={!isloggedin}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >


                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Login
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={submitUserData} >
                            <label>
                                <input name="username" type="text" placeholder='username' />
                            </label>
                            <label>

                                <input name="password" type="password" placeholder='password' />
                            </label>
                            <br></br>
                            <label>
                                <select name="role" >
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                </select>
                            </label>
                            <button>Login</button>
                        </form>
                    </Typography>
                </Box>


            </Modal>
        </div>
    );
}
