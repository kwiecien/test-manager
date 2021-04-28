import {FC} from "react";
import TestListItem from "./TestListItem";
import "./TestsList.css";
import {Test} from "../../types/Test";

interface Props {
    tests: Test[];
}

const TestsList: FC<Props> = ({tests}) => {
    return <div className={"tests-list"}>
        {tests.map(test => <TestListItem key={test.id} test={test}/>)}
    </div>;
}

export default TestsList;