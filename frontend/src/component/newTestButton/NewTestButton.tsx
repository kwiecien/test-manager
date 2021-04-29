import React, {FC} from "react";
import {Button} from "@material-ui/core";

interface Props {
    onClick: () => void;
}

const NewTestButton: FC<Props> = ({onClick}) => {
    return <Button variant={"outlined"} color={"primary"} size={"large"}
                   onClick={onClick}>
        Create a new test
    </Button>;
}

export default NewTestButton;