import React from "react";
import Task from "./Task";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

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


const TaskList = ({ title, tasks, listID }) => {
    return(
        <Droppable droppableId={String(listID)}>
            {provided => (
            <ListWrapper {...provided.droppableProps} ref={provided.innerRef}>
                <TaskTitle>{title}</TaskTitle>
                {tasks.map((task, index) => (
                    <Task key={task.id} index={index} id={task.id} text={task.text}></Task>
                ))}
                {provided.placeholder}
            </ListWrapper>
            )}
        </Droppable>
    )
}

export default TaskList;

    // display: flex;
    // flex-direction: column;