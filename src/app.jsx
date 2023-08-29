import React from 'react';

import ToDo from './components/todo/todo.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// export default class App extends React.Component {
//   render() {
//     return (
//       <ToDo />
//     );
//   }
// }
import ListProvider from './context/ListContext.jsx';
export default function App() {
  return (

    <ListProvider>
      <ToDo />
    </ListProvider>
  );
}