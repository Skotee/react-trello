import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import styled from "styled-components"

const TaskStyles = styled.div `
    overflow: hidden;
    padding: 2px 6px 2px;
    position: relative;
    margin: 4px;
    font-size: 14px;
    color: gray;
`;

const TaskText = styled.div `
    font-size: 14px;
    color: gray;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;


const Task = ({ text, id, index }) => {
    return(
        <Draggable draggableId={String(id)} index={index}>
        {provided => (
            <TaskStyles
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <Card>
                    <CardContent>
                        <TaskText>{text}</TaskText>
                    </CardContent>
                </Card>
            </TaskStyles>
        )}
        </Draggable>
    )
}

export default Task;