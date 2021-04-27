import {FC} from "react";
import "./TestListItem.css"
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {TestStatus} from "./TestStatus";

interface Props {
    style?: string;
}

const TestListItem: FC<Props> = ({style}) => {
    return <div className={"test-list-item"}>
        <div>My test 1</div>
        <FormControl className={"form-control"} variant="outlined">
            <Select value={TestStatus.UNDEFINED} onChange={() => ({/* TODO */})}>
                <MenuItem value={TestStatus.UNDEFINED}>{TestStatus.UNDEFINED}</MenuItem>
                <MenuItem value={TestStatus.PASSED}>{TestStatus.PASSED}</MenuItem>
                <MenuItem value={TestStatus.FAILED}>{TestStatus.FAILED}</MenuItem>
            </Select>
        </FormControl>
    </div>;
}

export default TestListItem;