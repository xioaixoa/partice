import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List, message ,Row, Col} from "antd";
import axios from "axios";
import store from './store/index';
// import {CHANGE_INPUT_INPUTVALUE,ADD_TODO_ITEM,DEL_DATA} from './store/actionType'
import { getInputChangeAction, getAddTodoItem, getDelData }  from './store/actionCreators'

class TodoList extends Component {
 
    constructor(props) {
    super(props); 
    
    //Store部分
    this.state = store.getState();
    //输出store的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    console.log(this.state);
    store.subscribe(this.handleStoreChange);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleClean = this.handleClean.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
  }

  render() {
    return (
      <div style={{ margin: "10px"}}>
        {/* <Row type="flex" gutter={32} justify="start"> */}
          {/* <Col span={12} style={{ padding:0}}> */}
          <Input
            value={this.state.inputValue}
            placeholder="add todo"
            onChange={this.handleChange}
            style={{ width:"60%"}}

          />
          {/* </Col> */}
          {/* <Col span={3} style={{ padding:0}}> */}
          <Button
            type="primary"
            onClick={this.handleAdd}
            // style={{ marginTop: "0.5rem", marginRight: "0.5rem", }}
          >
            Add
          </Button>
          {/* </Col> */}
          {/* <Col span={4} > */}
          <Button
            type="primary"
            onClick={this.handleAjax}
            // style={{ marginTop: "0.5rem", marginRight: "0.5rem" }}
          >
            Export
          </Button>
          {/* </Col> */}
          {/* <Col span={4} > */}
          <Button
            type="primary"
            onClick={this.handleClean}
            // style={{ width: "wrap-content", marginTop: "0.5rem", marginRight: "0.5rem" }}
          >
            Clean
          </Button>
          {/* </Col> */}
          {/* </Row> */}
          <List
            header={<div style={{ textAlign: "center" }}>** TodoList **</div>}
            footer={
              <div style={{ textAlign: "center", fontSize: "10px" }}>
                {" "}
                Copyright Rain{" "}
              </div>
            }
            bordered
            dataSource={this.state.dataObj}
            renderItem={item => (
              <List.Item onClick={this.handleDel}>
                <ul>
                  <li>{item}</li>
                </ul>
              </List.Item>
            )}
            style={{ width: "20rem", margin: "0.5rem" }}
          />
      </div>
    );
  }


  handleAdd() {
    {
      /* 异步方法 传入一个prevState下面的this.state就可以替换为prevState*/
    }
    //redux
    // const action = {
    //   type: ADD_TODO_ITEM,
    // };
    // store.dispatch(action);

    const action = getAddTodoItem();
    store.dispatch(action);

    // if (this.state.inputValue) {
    //   this.setState(prevState => ({
    //     dataObj: [...prevState.dataObj, prevState.inputValue],
    //     inputValue: ""
    //   }));
    // } else {
    //   message.warning("Empty input!", 0.4);
    // }
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
  handleChange(e) {
    {
      /* 使用异步方法，需要写成函数形式，可以节省性能*/
    }
    {
      /* ES6写法：返回小括号里面的对象*/
    }
    // const value = e.target.value;
    // this.setState(
    //   () => ({
    //     inputValue: value
    //   }),
    //   () => {
    //     console.log("这是setState回调函数");
    //   }
    // );
    //redux
    // const action = {
    //   type: CHANGE_INPUT_INPUTVALUE,
    //   value: e.target.value
    // }
    // store.dispatch(action)

    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleDel(index) {
    {
      /* 异步写法 ,写成函数体*/
    }


    // const action = {
    //   type: DEL_DATA,
    //   index
    // }
    // store.dispatch(action)

    const action = getDelData(index);
    store.dispatch(action);

    // this.setState(
    //   prevState => {
    //     const dataObj = [...prevState.dataObj];
    //     dataObj.splice(index, 1);
    //     return { dataObj };
    //   },
    //   () => {
    //     message.success("Deleting successed!", 0.2);
    //   }
    // );
  }

  handleClean() {
    this.setState(
      () => {
        return {
          dataObj: []
        };
      },
      () => {
        message.success("Cleaning successed!", 0.4);
      }
    );
  }

  handleAjax() {
    axios
      .get("/todoList.json")
      .then(res => {
        console.log(res.data);

        this.setState(
          () => {
            return {
              dataObj: [...this.state.dataObj.concat(res.data)]
            };
          },
          () => {
            message.success("Exportint successed!", 0.4);
          }
        );

        //   this.setState(() => ({
        //     // return {
        //       dataObj: [...this.state.dataObj.concat(res.data)]
        //     // }
        //   },() => {setTimeout(function () {alert('成功导入！')},100)}))
      })
      .catch(() => {
        message.error("Fail to export!", 1);
      });
  }
}

export default TodoList;
