import React from "react";
import { When } from "react-if";
import { useContext } from "react";
import { ListContext } from "../context/ListContext";

export default function Auth(props) {
    const { addItem, deleteItem, toggleComplete, list, incompleteCount, incomplete, defaultValues, isloggedin, setIsloggedin, openLogginForm, setOpenLogginForm, openSignupForm, setOpenSignupForm, userData, setUserData, userType, setUserType, } = useContext(ListContext);



    return (
        <When condition ={userData.role === props.capability  }>
            <div>{props.children}</div>
        </When>
    );
}