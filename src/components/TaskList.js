import React from "react";
import Task from "./Task";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

const ListWrapper = styled.div `
    font-size: 24px;
    background-color: #dfe1e6;
    border-radius: 3px;
    width: 272px;
    margin: 10px 7px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
`;

const TaskTitle = styled.div `
    padding: 10px 8px 8px 12px;
    font-weight: bold;
    font-size: 14px;
`;


const TaskList = ({ title, tasks, listID, index }) => {
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListWrapper
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                    >
                    <Droppable droppableId={String(listID)} type="task">
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <TaskTitle>{title}</TaskTitle>
                                {tasks.map((task, index) => (
                                    <Task key={task.id} index={index} id={task.id} text={task.text}></Task>
                                ))}
                            </div>
                        )}
                    </Droppable>
                </ListWrapper>
            )}
        </Draggable>
    );
};

export default TaskList;