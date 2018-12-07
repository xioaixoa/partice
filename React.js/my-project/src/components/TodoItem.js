import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDel = this.handleDel.bind(this);
  }

  render() {
	const { index, handleDel, item} = this.props;
    return (
      <div index={index} onClick={handleDel}>
        <li>{item}</li>
      </div>
    );
  }

  handleDel() {
	  const { deleteItem, index } = this.props;
	  deleteItem(index);
    // this.props.deleteItem(this.props.index);
  }
}

export default TodoItem;
