import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem'
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  render() { 
    return (
      <Fragment>
        <div>
          {/*这是一个注释*/}
          <label htmlFor="insertArea">请输入: </label>
          <input 
          id="insertArea"
          value={this.state.inputValue} 
          onChange={this.handleChange} 
          className='input'
          />
          <button onClick={this.handleAdd}>+Add</button>
        </div>
        <ul>
          { this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
    {/* 写成一个方法就需要加一个 return */}
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          {/*父组件向子组件传递 值和方法（绑定this指向）key要放在最外层*/}
        <TodoItem 
        item={item} 
        index={index}
        deleteItem={this.handleDel}
        />
        {/*<li key={index} onClick={this.handleDel.bind(this, index)}
            dangerouslySetInnerHTML={{__html:item}}
        >
      </li>*/}
        </div>  
      ) 
    })
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
    
    {/* 使用异步方法，需要写成函数形式，可以节省性能*/}
    // const value = e.target.value; 
    // this.setState(() => {
    //   return {
    //     inputValue: value
    //   }
    // });

    {/* ES6写法：返回小括号里面的对象*/}
    // this.setState(() => ({
    //   inputValue: value
    // }));

  }

  handleDel(index) {

    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });

    {/* 异步写法 ,写成函数体*/}
    // this.setState((prevState) => {
    //   const list = [...prevState.list];
    //   list.splice(index, 1);
    //   return {list}
    // });
  }

  handleAdd() {
    {/* 异步方法 传入一个prevState下面的this.state就可以替换为prevState*/}
    // this.setState((prevState) => ({
    //   list: [...prevState.list, prevState.inputValue],
    //   inputValue:''
    // }));

    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }

}

export default TodoList;
