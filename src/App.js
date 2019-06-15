import React, { Component } from 'react';
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import styled from "styled-components"
import { DragDropContext } from "react-beautiful-dnd"


const Column = styled.div `
    display: flex;
    flex-direction: row;
`;

class App extends Component {
  onDragEnd =() => {

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
