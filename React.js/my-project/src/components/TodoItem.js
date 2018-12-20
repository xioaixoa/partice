import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDel = this.handleDel.bind(this);
  }

  // // 当一个组件从父组件接收了参数，父组件的render函数被【重新】（第二次）执行后执行该函数
  // // 如果这个组件第一次存在于父组件中，不会执行
  // // 如果这个组件之前已经存在父组件中，才会执行
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps!')
  // }
  //  // 组件即将在页面被剔除的时候执行
  //  componentWillUnmount(){
  //   console.log('componentWillUnmount!')
  // }

  render() {
	const { index, item } = this.props;
    return (
      <div index={index} onClick={this.handleDel}>
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

TodoItem.propTypes = {
	content: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number,
}

TodoItem.defaultTypes ={

}

export default TodoItem;
