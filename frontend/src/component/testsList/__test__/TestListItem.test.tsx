import {fireEvent, render} from "@testing-library/react";
import TestListItem, {testIds} from "../TestListItem";
import {TestStatus} from "../../../domain/TestStatus";
import {Test} from "../../../domain/Test";
import {capitalize} from "../../../utils/StringUtils";

describe('TestListItem', () => {
    const test: Test = {
        id: 1,
        status: TestStatus.UNDEFINED,
    }

    const onChange = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render', () => {
        const {getByText} = render(<TestListItem test={test} onStatusChange={onChange}/>);
        const label = getByText(/My test/i);
        expect(label).toBeInTheDocument();
    });

    it('should render test numbers', () => {
        const id = 123;
        const {getByText} = render(<TestListItem test={{...test, id}} onStatusChange={onChange}/>);
        const label = getByText(`My test ${id}`);
        expect(label).toBeInTheDocument();
    });

    it('should change test status', () => {
        const {getByText, getByTestId} = render(<TestListItem test={test} onStatusChange={onChange}/>);
        const select = getByTestId(testIds.select);
        const newStatus = TestStatus.PASSED;
        expect(getByText(capitalize(TestStatus.UNDEFINED))).toBeInTheDocument();
        expect(onChange).not.toHaveBeenCalled();

        fireEvent.change(select, {target: {value: newStatus}})

        expect(onChange).toHaveBeenCalledWith({id: test.id, status: newStatus});
    });
});