// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './app.jsx';

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Main />, rootElement);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";

import App from './app.jsx';

function Main() {
  return (
  <BrowserRouter>
  <App />
  </BrowserRouter>
  
  
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);