import React, {useState} from 'react';
import './App.css';
import NewTestButton from "./component/newTestButton/NewTestButton";
import TestsList from "./component/testsList/TestsList";
import {CachePolicies, useFetch} from "use-http";
import {useMount} from "react-use";
import {Test} from "./domain/Test";
import {backendUrl, routes} from "./network/Url";

function App() {
    const [tests, setTests] = useState<Test[]>([]);
    const {get, post, put, response} = useFetch(backendUrl, {cachePolicy: CachePolicies.NO_CACHE});

    useMount(() => {
        getTests().catch(reason => console.error(reason));
    })

    async function getTests(): Promise<void> {
        const tests = await get(routes.tests);
        if (response.ok) setTests(tests);
    }

    async function createNewTest(): Promise<void> {
        const newTest = await post(routes.tests, {});
        if (response.ok) setTests([...tests, newTest]);
    }

    async function changeTestStatus(test: Test): Promise<void> {
        await put(`${routes.tests}/${test.id}`, test.status.toUpperCase());
        if (response.ok) {
            const updatedTests = tests.reduce((updated: Test[], t) => t.id !== test.id
                ? [...updated, t]
                : [...updated, {...t, status: test.status}],
                []);
            setTests(updatedTests);
        }
    }

    return (
        <div className="App">
            <NewTestButton onClick={createNewTest}/>
            <TestsList tests={tests} onStatusChange={changeTestStatus}/>
        </div>
    );
}

export default App;
