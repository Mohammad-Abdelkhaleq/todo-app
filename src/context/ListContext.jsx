import React from 'react';
import { useState, useEffect } from 'react';
export const ListContext = React.createContext();
import { v4 as uuid } from 'uuid';

export default function ListProvider(props) {

    const [defaultValues] = useState({
        difficulty: 4,
    });
    const [list, setList] = useState([]);

    const [incomplete, setIncomplete] = useState([]);

    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [difficulty, setDifficulty] = useState(1);
    const [includeCompleted, setIncludeCompleted] = useState(false);
    const [isloggedin, setIsloggedin] = useState(false);
    const [openLogginForm, setOpenLogginForm] = useState(false);
    const [openSignupForm, setOpenSignupForm] = useState(false);
    const [userData, setUserData] = useState({}); 
    const [userType, setUserType] = useState('user');

    const state = {
        list,
        incomplete,
        defaultValues,
        addItem,
        deleteItem,
        toggleComplete,
        incompleteCount,
        page,
        setPage,
        itemsPerPage,
        setItemsPerPage,
        difficulty,
        setDifficulty,
        includeCompleted,
        setIncludeCompleted,
        isloggedin,
        setIsloggedin,
        openLogginForm,
        setOpenLogginForm,
        openSignupForm,
        setOpenSignupForm,
        userData,
        setUserData,
        userType,
        setUserType,
        
    }

    function addItem(item) {
        item.id = uuid();
        item.complete = false;
        console.log(item);
        setList([...list, item]);
    }

    function deleteItem(id) {
        const items = list.filter(item => item.id !== id);
        setList(items);
    }

    function toggleComplete(id) {

        const items = list.map(item => {
            if (item.id == id) {
                item.complete = !item.complete;
            }
            return item;
        });

        setList(items);

    }


    function incompleteCount(list) {
        let incompleteCount = list.filter(item => !item.complete).length;
        setIncomplete(incompleteCount);
    }


    useEffect(() => {
        // Store values in local storage
        // localStorage.setItem('itemsPerPage', itemsPerPage);
        // localStorage.setItem('difficulty', difficulty);
        // localStorage.setItem('includeCompleted', JSON.stringify(includeCompleted));
    
        // Retrieve values from local storage
        const storedItemsPerPage = localStorage.getItem('itemsPerPage');
        const storedDifficulty = localStorage.getItem('difficulty');
        const storedIncludeCompleted = JSON.parse(localStorage.getItem('includeCompleted'));

        console.log('storedItemsPerPage', storedItemsPerPage);
        console.log('storedDifficulty', storedDifficulty);
        console.log('storedIncludeCompleted', storedIncludeCompleted);
    
        // Update state variables with stored values
        if (storedItemsPerPage) {
            setItemsPerPage(parseInt(storedItemsPerPage));
        }
        if (storedDifficulty) {
            setDifficulty(parseInt(storedDifficulty));
        }
        if (storedIncludeCompleted !== null) {
            setIncludeCompleted(storedIncludeCompleted);
        }
    }, [itemsPerPage, difficulty, includeCompleted]);
    

    return (
        <ListContext.Provider value={state}>
            {props.children}
        </ListContext.Provider>
    )


}

