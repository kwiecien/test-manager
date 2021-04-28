import {fireEvent, render} from "@testing-library/react";
import React from "react";
import NewTestButton from "../NewTestButton";

describe('NewTestButton', () => {
    const onClick = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render', () => {
        render(<NewTestButton onClick={onClick}/>);
    });

    it('should trigger on click callback when button is clicked', () => {
        const {getByText} = render(<NewTestButton onClick={onClick}/>);
        fireEvent.click(getByText(/create a new test/i));
        expect(onClick).toHaveBeenCalled();
    });
});