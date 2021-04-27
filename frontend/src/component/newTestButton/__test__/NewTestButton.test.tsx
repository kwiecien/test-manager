import {render} from "@testing-library/react";
import React from "react";
import NewTestButton from "../NewTestButton";

describe('NewTestButton', () => {
    it('should render', () => {
        render(<NewTestButton/>);
    });
});