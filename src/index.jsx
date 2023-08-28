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
import ReactDOM from 'react-dom/client';
import App from './app.jsx'; // Make sure the file extension is correct

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

function Main() {
  return <App />;
}

root.render(<Main />);
