import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header/index.jsx';
import Footer from './Footer/index.jsx';
import Settings from './SettingsPage/index.jsx';
import List from './List/index.jsx';
import BasicModal from './LoginForm/LoginForm.jsx';
import Auth from '../../Auth/Auth.jsx';
import SignUp from '../signUpForm/Signup.jsx';
import { ListContext } from '../../context/ListContext.jsx';
import { useContext } from 'react';



import { v4 as uuid } from 'uuid';

const ToDo = () => {

  // const [defaultValues] = useState({
  //   difficulty: 4,
  // });
  // const [list, setList] = useState([]);
  // const [incomplete, setIncomplete] = useState([]);
  // const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  // function addItem(item) {
  //   item.id = uuid();
  //   item.complete = false;
  //   console.log(item);
  //   setList([...list, item]);
  // }

  // function deleteItem(id) {
  //   const items = list.filter( item => item.id !== id );
  //   setList(items);
  // }

  // function toggleComplete(id) {

  //   const items = list.map( item => {
  //     if ( item.id == id ) {
  //       item.complete = ! item.complete;
  //     }
  //     return item;
  //   });

  //   setList(items);

  // }

  // useEffect(() => {
  //   let incompleteCount = list.filter(item => !item.complete).length;
  //   setIncomplete(incompleteCount);
  //   document.title = `To Do List: ${incomplete}`;
  // }, [list]);

  // useEffect( () => {
  //   incompleteCount(list);
  //   document.title = `To Do List: ${incomplete}`;
  // } , [list]);

  const { addItem, deleteItem, toggleComplete, list, incompleteCount, incomplete, defaultValues, isloggedin, setIsloggedin, openLogginForm, setOpenLogginForm, openSignupForm, setOpenSignupForm, } = useContext(ListContext);

  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);


  useEffect(() => {
    incompleteCount(list);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
    {/* {!isloggedin &&<BasicModal />} */}
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={!isloggedin &&<BasicModal />} />
    </Routes>
      {/* <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header> */}
      {isloggedin && <>

        <Header incomplete={incomplete} />

        <form onSubmit={handleSubmit}>

          <h2>Add To Do Item</h2>

          <label>
            <span>To Do Item</span>
            <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
          </label>

          <label>
            <span>Assigned To</span>
            <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
          </label>

          <label>
            <span>Difficulty</span>
            <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
          </label>

          <label>
            <button type="submit">Add Item</button>
          </label>
        </form>
      </>}

      {/* {list.map(item => (
<div key={item.id}>
  <p>{item.text}</p>
  <p><small>Assigned to: {item.assignee}</small></p>
  <p><small>Difficulty: {item.difficulty}</small></p>
  <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
  <button onClick={() => deleteItem(item.id)}>Delete</button>
  <hr />
</div>
))} */}

      { isloggedin &&<>
        <Routes>
          {/* <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} /> */}
          <Route path="/" element={<List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
        {/* <BasicModal /> */}
        <Footer />
      </>}

    </>
  );
};

export default ToDo;
