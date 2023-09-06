import { ListContext } from "../../../context/ListContext";
import { useContext, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Auth from "../../../Auth/Auth";

function List(props) {

    const { addItem, deleteItem, toggleComplete, list, incompleteCount, incomplete, defaultValues, itemsPerPage, setItemsPerPage, difficulty,setDifficulty, includeCompleted,
        setIncludeCompleted } = useContext(ListContext);

    const [pagenumb, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [nextElements, setNextElements] = useState([]);
    const [prevElements, setPrevElements] = useState([]);

    const handleChange = (event, value) => {
        setPage(value);
    }

// hide completed items

    let filteredListByDifficulty = list.filter(item => item.difficulty == difficulty);
    let filteredList = [];
    if (!includeCompleted) {
         filteredList = filteredListByDifficulty.filter(item => !item.complete);

    }else{
         filteredList = filteredListByDifficulty;}

    let devidedPerPage = [];
    let elementPerPage = itemsPerPage;
    let i = 0;

    while (i < list.length) {
        let subArray = filteredList.slice(i, i + elementPerPage);
        devidedPerPage.push(subArray);
        i += elementPerPage;
    }

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',list);

    return (
        <>
            <div style={{ height: '50vh', overflow: 'auto', margin: '2em' }}>
                {devidedPerPage[pagenumb - 1] &&
                    devidedPerPage[pagenumb - 1].map((item) => (
                        <div key={item.id}>
                            <p>{item.text}</p>
                            <p>
                                <small>Assigned to: {item.assignee}</small>
                            </p>
                            <p>
                                <small>Difficulty: {item.difficulty}</small>
                            </p>
                            <Auth capability="admin">
                            <div onClick={() => toggleComplete(item.id)}>
                                Complete: {item.complete.toString()}
                            </div>
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                            </Auth>
                            <hr />
                        </div>
                    ))}
            </div>
            <Pagination count={devidedPerPage.length} page={pagenumb} color="primary" onChange={handleChange} />

        </>
    )
}

export default List;