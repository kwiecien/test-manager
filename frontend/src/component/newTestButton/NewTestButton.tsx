import React, {FC} from "react";
import {Button} from "@material-ui/core";
import "./NewTestButton.css"

interface Props {
    onClick: () => void;
}

const NewTestButton: FC<Props> = ({onClick}) => {
    return <Button variant={"outlined"} color={"primary"}
                   size={"large"} className={"new-test-button"}
                   onClick={onClick}>
        Create a new test
    </Button>;
}

export default NewTestButton;