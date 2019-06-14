import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import styled from "styled-components"

const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    cursor: pointer;
    display: block;
    margin-bottom: 8px;
    max-width: 300px;
    min-height: 20px;
    position: relative;
    text-decoration: none;
    z-index: 0;
`;

const Task = ({ text }) => {
    return(
        <div>
            <Card>
                <Typography>{text}</Typography>
            </Card>
        </div>
    )
}

export default Task;