import React, {useState} from 'react';
import './App.css';
import NewTestButton from "./component/newTestButton/NewTestButton";
import TestsList from "./component/testsList/TestsList";
import {CachePolicies, useFetch} from "use-http";
import {useMount} from "react-use";
import {Test} from "./types/Test";
import {backendUrl, routes} from "./network/Url";

function App() {
    const [tests, setTests] = useState<Test[]>([]);
    const {get, post, response} = useFetch(backendUrl, {cachePolicy: CachePolicies.NO_CACHE});

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

    return (
        <div className="App">
            <NewTestButton onClick={createNewTest}/>
            <TestsList tests={tests}/>
        </div>
    );
}

export default App;
