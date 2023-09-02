import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({ completed, onComplete }){
    return (
        <TodoIcon
        type={`${completed ? 'activate' : 'check'}`}
        onClick={onComplete}
        //type={`${completed && 'activate'}`}
        //color={`${completed && '#00B5C4'}`}
        />
    );
}

export { CompleteIcon };
