import {FC} from "react";
import TestListItem from "./TestListItem";
import "./TestsList.css";

const TestsList: FC = () => {
    return <div className={"tests-list"}>
        <TestListItem id={1}/>
        <TestListItem id={2}/>
    </div>;
}

export default TestsList;