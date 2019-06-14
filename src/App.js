import React, { Component } from 'react';
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import styled from "styled-components"

const Column = styled.div `
    display: flex;
    flex-direction: row;
`;

class App extends Component {
    render() {
    const { lists } = this.props;
    return (
      <>
      <h1>React Trello</h1>
      <h2>Welcome Board</h2>

      <Column>
        {lists.map(list => (
          <TaskList title={list.title} tasks={list.tasks} />
        ))}
      </Column>
      </>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
