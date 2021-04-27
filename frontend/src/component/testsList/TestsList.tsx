import {FC} from "react";
import TestListItem from "./TestListItem";
import "./TestsList.css";

const TestsList: FC = () => {
    return <div className={"tests-list"}>
        <TestListItem/>
        <TestListItem/>
    </div>;
}

export default TestsList;