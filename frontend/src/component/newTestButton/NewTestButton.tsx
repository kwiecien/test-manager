import React, {FC} from "react";
import {Button} from "@material-ui/core";
import "./NewTestButton.css"

const NewTestButton: FC = () => {
    return <Button variant={"outlined"} color={"primary"}
                   size={"large"} className={"new-test-button"}>
        Create a new test
    </Button>;
}

export default NewTestButton;