import React from "react";
import Task from "./Task";
import styled from "styled-components";

// const TaskList = styled.div`
//     font-size: 24px;
//     background-color: #dfe1e6;
//     display: flex;
//     flex-direction: column;
// `;

const TaskList = ({ title, tasks }) => {
    return(
        <div>
            <h2>TaskList</h2>
            <h3>{title}</h3>
            {tasks.map(task => (
                <Task text={task.text}></Task>
            ))}
        </div>
    )
}

export default TaskList;