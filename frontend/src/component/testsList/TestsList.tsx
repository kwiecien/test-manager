import {FC} from "react";
import TestListItem from "./TestListItem";
import "./TestsList.css";

const TestsList: FC = () => {
    return <div className={"tests-list"}>
        <TestListItem index={1}/>
        <TestListItem index={2}/>
    </div>;
}

export default TestsList;