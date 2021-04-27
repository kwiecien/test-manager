import {fireEvent, render} from "@testing-library/react";
import TestListItem, {testIds} from "../TestListItem";
import {TestStatus} from "../TestStatus";

describe('TestListItem', () => {
    it('should render', () => {
        const {getByText} = render(<TestListItem id={1}/>);
        const label = getByText(/My test/i);
        expect(label).toBeInTheDocument();
    });

    it('should render test numbers', () => {
        const {getByText} = render(<TestListItem id={123}/>);
        const label = getByText(/My test 123/i);
        expect(label).toBeInTheDocument();
    });

    it('should change test status', () => {
        const {getByText, getByTestId} = render(<TestListItem id={123}/>);
        const select = getByTestId(testIds.select);
        const oldStatus = getByText(TestStatus.UNDEFINED);
        const newStatus = TestStatus.PASSED;
        expect(oldStatus).toBeInTheDocument();
        fireEvent.change(select, {target: {value: newStatus}})
        expect(getByText(newStatus)).toBeInTheDocument();
    });
});