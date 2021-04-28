import * as React from "react";
import {FC} from "react";
import "./TestListItem.css"
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {TestStatus} from "../../types/TestStatus";
import {Test} from "../../types/Test";
import {capitalize} from "../../utils/StringUtils";

export const testIds = {
    select: 'select-test-id'
}

interface Props {
    test: Test;
    onStatusChange: (test: Test) => void;
}

const TestListItem: FC<Props> = ({test: {id, status}, onStatusChange}) => {
    const labelId = 'label-id';

    function changeStatus(event: React.ChangeEvent<{ value: unknown }>): void {
        const status = event.target.value as TestStatus;
        onStatusChange({id, status})
    }

    const menuItem = (status: TestStatus) =>
        <MenuItem value={status}>
            {capitalize(status)}
        </MenuItem>

    return <div className={"test-list-item"}>
        <label htmlFor={labelId}>{`My test ${id}`}</label>
        <FormControl className={"form-control"} variant="outlined">
            <Select inputProps={{"data-testid": testIds.select}} value={status}
                    onChange={changeStatus} labelId={labelId}>
                {menuItem(TestStatus.UNDEFINED)}
                {menuItem(TestStatus.PASSED)}
                {menuItem(TestStatus.FAILED)}
            </Select>
        </FormControl>
    </div>;
}

export default TestListItem;