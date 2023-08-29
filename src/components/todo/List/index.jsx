import { ListContext } from "../../../context/ListContext";
import { useContext, useState } from "react";
import Pagination from '@mui/material/Pagination';

function List(props) {

    const { addItem, deleteItem, toggleComplete, list, incompleteCount, incomplete, defaultValues } = useContext(ListContext);

    const [pagenumb, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [nextElements, setNextElements] = useState([]);
    const [prevElements, setPrevElements] = useState([]);

    const handleChange = (event, value) => {
        setPage(value);
    }

// hide completed items

    let filteredList = list.filter(item => !item.complete);

    let devidedPerPage = [];
    let elementPerPage = 3;
    let i = 0;

    while (i < list.length) {
        let subArray = filteredList.slice(i, i + elementPerPage);
        devidedPerPage.push(subArray);
        i += elementPerPage;
    }

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
                            <div onClick={() => toggleComplete(item.id)}>
                                Complete: {item.complete.toString()}
                            </div>
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                            <hr />
                        </div>
                    ))}
            </div>
            <Pagination count={devidedPerPage.length} page={pagenumb} color="primary" onChange={handleChange} />

        </>
    )
}

export default List;