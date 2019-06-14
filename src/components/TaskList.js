import React from "react";
import Task from "./Task";
import styled from "styled-components";

const ListWrapper = styled.div `
    font-size: 24px;
    background-color: #dfe1e6;
    border-radius: 3px;
    width: 272px;
    margin: 10px 10px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
`;

const TaskTitle = styled.div `
    padding: 10px 8px 8px 12px;
    font-weight: bold;
    font-size: 14px;
`;


const TaskList = ({ title, tasks }) => {
    return(
        <ListWrapper>
            <TaskTitle>{title}</TaskTitle>
            {tasks.map(task => (
                <Task text={task.text}></Task>
            ))}
        </ListWrapper>
    )
}

export default TaskList;

    // display: flex;
    // flex-direction: column;