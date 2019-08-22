import React from "react";

const List = props => (
  <ol>
    {props.data.map(element => {
      return <li key={element.id}>{element.text}</li>;
    })}
  </ol>
);

export class TodoForm extends React.Component {
  state = {
    text: ""
  };
  handleWrite = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <form
        onSubmit={e => {
          this.props.handleSubmit(e, this.state.text);
          this.setState({ text: "" });
        }}
      >
        <label htmlFor="text">Ingresa un elemento</label>
        <input onChange={this.handleWrite} id="text" value={this.state.text} />
      </form>
    );
  }
}

class TodoList extends React.Component {
  state = {
    list: []
  };
  handleSubmit = (e, text) => {
    e.preventDefault();
    this.setState({
      list: [...this.state.list, { id: this.state.list.length, text: text }],
      text: ""
    });
  };
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoForm handleSubmit={this.handleSubmit} />
        <List data={this.state.list} />
      </div>
    );
  }
}

export default TodoList;
