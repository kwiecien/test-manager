import {render} from "@testing-library/react";
import TestListItem from "../TestListItem";

describe('TestListItem', () => {
    it('should render', () => {
        const {getByText} = render(<TestListItem/>);
        const label = getByText(/My test/i);
        expect(label).toBeInTheDocument();
    });
});