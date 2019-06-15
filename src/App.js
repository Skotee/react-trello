import React, { Component } from 'react';
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "./actions";


const Column = styled.div `
    display: flex;
    flex-direction: row;
`;

class App extends Component {
  onDragEnd = result => {
    const {destination, source, draggableId, type} = result;
    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )
  };

    render() {
    const { lists } = this.props;
    return (
        <>
          <h1>React Trello</h1>
          <h2>Welcome Board</h2>
          <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="all-lists" direction="horizontal" type = "list">
            {provided => (
              <Column
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lists.map((list,index) => (
                  <TaskList listID={list.id}
                    key={list.id}
                    title={list.title}
                    tasks={list.tasks}
                    index={index}
                  />
                ))}
              </Column>
            )}
          </Droppable>
        </DragDropContext>
      </>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
  tasks: state.tasks
})

export default connect(mapStateToProps) (App);
