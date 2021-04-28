import {fireEvent, render} from "@testing-library/react";
import TestListItem, {testIds} from "../TestListItem";
import {TestStatus} from "../../../types/TestStatus";
import {Test} from "../../../types/Test";

describe('TestListItem', () => {
    const test: Test = {
        id: 1,
        status: TestStatus.UNDEFINED,
    }

    it('should render', () => {
        const {getByText} = render(<TestListItem test={test}/>);
        const label = getByText(/My test/i);
        expect(label).toBeInTheDocument();
    });

    it('should render test numbers', () => {
        const id = 123;
        const {getByText} = render(<TestListItem test={{...test, id}}/>);
        const label = getByText(`My test ${id}`);
        expect(label).toBeInTheDocument();
    });

    it('should change test status', () => {
        const {queryByText, getByText, getByTestId} = render(<TestListItem test={test}/>);
        const select = getByTestId(testIds.select);
        const newStatus = TestStatus.PASSED;
        expect(getByText(TestStatus.UNDEFINED)).toBeInTheDocument();
        expect(queryByText(newStatus)).not.toBeInTheDocument();

        fireEvent.change(select, {target: {value: newStatus}})

        expect(queryByText(TestStatus.UNDEFINED)).not.toBeInTheDocument();
        expect(getByText(newStatus)).toBeInTheDocument();
    });
});