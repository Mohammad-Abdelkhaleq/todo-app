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

    const state = {
        list,
        incomplete,
        defaultValues,
        addItem,
        deleteItem,
        toggleComplete,
        incompleteCount,

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

return (
    <ListContext.Provider value={state}>
        {props.children}
    </ListContext.Provider>
)


}

