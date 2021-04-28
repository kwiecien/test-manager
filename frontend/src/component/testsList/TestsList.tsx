import {FC} from "react";
import TestListItem from "./TestListItem";
import "./TestsList.css";
import {Test} from "../../types/Test";

interface Props {
    tests: Test[];
    onStatusChange: (test: Test) => void;
}

const TestsList: FC<Props> = ({tests, onStatusChange}) => {
    return <div className={"tests-list"}>
        {tests.map(test => <TestListItem key={test.id} test={test} onStatusChange={onStatusChange}/>)}
    </div>;
}

export default TestsList;