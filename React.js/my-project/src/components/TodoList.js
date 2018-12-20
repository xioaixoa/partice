import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem'
import axios from 'axios';
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
  // //在组件即将第一次被挂载的时候执行
  // componentWillMount(){
  //   console.log('componentsWillMount!')
  // }
  // // 在组件第一次被挂载时候执行
  // componentDidMount(){
  //   console.log('componentDidMount!')
  // }
  // // 组件被更新之前执行,需要返回一个布尔值（需要被更新吗？）如果false就不会更新
  // shouldComponentUpdate(){
  //   console.log('shouldComponentUpdate!')
  //   return true
  // }
  // // 组件被更新之前执行，但是是在shouldComponentUpdate返回true后运行，如果false不执行 
  // componentWillUpdate(){
  //   console.log('componentWillUpdate!')
  // }
  // // 数据变化，render执行后执行
  // componentDidUpdate(){
  //   console.log('componentDidUpdate!')
  // }
  // // 当一个组件从父组件接收了参数，父组件的render函数被【重新】（第二次）执行后执行该函数
  // // 如果这个组件第一次存在于父组件中，不会执行
  // // 如果这个组件之前已经存在父组件中，才会执行
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps!')
  // }
 
  componentDidMount(){
    // axios.get('/api/todolist')
    // .then((res) => {
    //   console.log(res.data)
    //   this.setState(() => {
    //     return {
    //       list: res.data 
    //     }
    //   })
    // })
    // .catch(()=>{alert('fail')}) 
  }

  handleAjax(){
    axios.get('/api/todolist')
    .then((res) => {
      console.log(res.data)

      this.setState(() => ({
        // return {
          list: [...this.state.list.concat(res.data)]
        // }
      },() => {setTimeout(function () {alert('成功导入！')},100)}))
    })
    .catch(()=>{alert('fail')}) 
  }

  handleClean(){
    this.setState(() => {
      return {
        list: []
      }
    },() => {setTimeout(function () {alert('已清空！')},100)})
  }
  
  render() { 
    console.log('rendering')
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
          // ref={(inp)=>{this.inputRef = inp}}
          />
          <button onClick={this.handleAdd}>+Add</button>
          <button onClick={this.handleAjax.bind(this)}>导入</button>
          <button onClick={this.handleClean.bind(this)}>清空</button>
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
      // inputValue: this.inputRef.value
    },() => {console.log('这是setState回调函数')});
    
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
