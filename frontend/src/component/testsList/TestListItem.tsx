import * as React from "react";
import {FC, useState} from "react";
import "./TestListItem.css"
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {TestStatus} from "../../types/TestStatus";
import {Test} from "../../types/Test";

export const testIds = {
    select: 'select-test-id'
}

interface Props {
    test: Test;
}

const TestListItem: FC<Props> = ({test: {id, status}}) => {
    const [testStatus, setTestStatus] = useState(TestStatus.UNDEFINED);
    const labelId = 'label-id';

    function changeStatus(event: React.ChangeEvent<{ value: unknown }>): void {
        setTestStatus(event.target.value as TestStatus);
    }

    return <div className={"test-list-item"}>
        <label htmlFor={labelId}>{`My test ${id}`}</label>
        <FormControl className={"form-control"} variant="outlined">
            <Select inputProps={{"data-testid": testIds.select}} value={testStatus}
                    onChange={changeStatus} labelId={labelId}>
                <MenuItem value={TestStatus.UNDEFINED}>{TestStatus.UNDEFINED}</MenuItem>
                <MenuItem value={TestStatus.PASSED}>{TestStatus.PASSED}</MenuItem>
                <MenuItem value={TestStatus.FAILED}>{TestStatus.FAILED}</MenuItem>
            </Select>
        </FormControl>
    </div>;
}

export default TestListItem;