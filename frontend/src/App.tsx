import React from 'react';
import './App.css';
import NewTestButton from "./component/newTestButton/NewTestButton";
import TestsList from "./component/testsList/TestsList";

function App() {
    return (
        <div className="App">
            <NewTestButton/>
            <TestsList/>
        </div>
    );
}

export default App;
