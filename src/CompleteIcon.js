import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({ completed }){
    return (
        <TodoIcon
        type="check"
        color={`${completed && '#00B5C4'}`}
        />
    );
}

export { CompleteIcon };
