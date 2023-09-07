import React from 'react';
import { useState, useEffect } from 'react';
export const ListContext = React.createContext();
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export default function ListProvider(props) {

    const mockData = [
        {
            "difficulty": 1,
            "text": "Task 1",
            "assignee": "Alice",
            "id": "3d55bd6c-11f1-491e-a786-81df934fafd0",
            "complete": false
        },
        {
            "difficulty": 1,
            "text": "Task 2",
            "assignee": "Bob",
            "id": "6a9e2b42-ef81-4e76-b5e9-35e30cf7e814",
            "complete": false
        },
        {
            "difficulty": 1,
            "text": "Task 3",
            "assignee": "Charlie",
            "id": "8b1b2a53-73b2-4e6f-b6c7-9f7fda6a1c17",
            "complete": false
        }
    ]

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
    const [signedUpUsers, setSignedUpUsers] = useState([]);




    async function toDos() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
        const convertedTasks = convertTasks(response.data);
        setList(convertedTasks);

    }

    function convertTasks(tasks) {
        const convertedTasks = [];
    
        tasks.forEach(task => {
            if (task && task.title !== undefined && task.completed !== undefined) {
                const convertedTask = {
                    difficulty: 1,
                    text: task.title,
                    assignee: 'developer',
                    id: uuid(),
                    complete: false,
                };
    
                convertedTasks.push(convertedTask);
            }
        });
    
        return convertedTasks;
    }

    useEffect(() => {
        toDos();
    }, []);
    



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
        signedUpUsers,
        setSignedUpUsers,

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

