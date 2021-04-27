import {render} from "@testing-library/react";
import TestListItem from "../TestListItem";

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
});