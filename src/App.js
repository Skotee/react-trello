import React, { Component } from 'react';
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "./actions";


const Column = styled.div `
    display: flex;
    flex-direction: row;
`;

class App extends Component {
  onDragEnd = result => {
    const {destination, source, draggableId} = result;
    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )
  };

    render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h1>React Trello</h1>
        <h2>Welcome Board</h2>

        <Column>
          {lists.map(list => (
            <TaskList listID={list.id} key={list.id} title={list.title} tasks={list.tasks} />
          ))}
        </Column>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
