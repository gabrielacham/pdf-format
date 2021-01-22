import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormView from './FormView'

function App() {
    return (
        <div className="App">
              <FormView />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
