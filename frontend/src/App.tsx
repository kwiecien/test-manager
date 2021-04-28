import React, {useState} from 'react';
import './App.css';
import NewTestButton from "./component/newTestButton/NewTestButton";
import TestsList from "./component/testsList/TestsList";
import {useFetch} from "use-http";
import {TestStatus} from "./component/testsList/TestStatus";
import {useMount} from "react-use";

interface Test {
    id: number;
    status: TestStatus;
}

function App() {
    const [tests, setTests] = useState<Test[]>([]);
    const {get, post, response} = useFetch('http://localhost:8080'); // TODO extract url

    useMount(() => {
        getTests().catch(reason => console.error(reason));
    })

    async function getTests(): Promise<void> {
        const tests = await get('/tests'); // TODO extract url
        if (response.ok) setTests(tests);
    }

    async function createNewTest(): Promise<void> {
        const newTest = await post('/tests');
        if (response.ok) setTests([...tests, newTest]);
    }

    return (
        <div className="App">
            <NewTestButton/>
            <TestsList/>
        </div>
    );
}

export default App;
