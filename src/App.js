import React, { Component } from 'react';
import TaskList from "./components/TaskList";
import { connect } from "react-redux";

class App extends Component {
    render() {
    const { lists } = this.props;
    return (
      <div>
        {lists.map(list => (
          <TaskList title={list.title} tasks={list.tasks} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
