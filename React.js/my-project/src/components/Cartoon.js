import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Cartoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      in: true,
      value: "",
      toggle: "Enter",
      list: []
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div className={"cartoon"}>
          <CSSTransition
            in={this.state.in}
            timeout={1500}
            classNames="fade"
            appear={true}
            // unmountOnExit
            onEnter={el => {
              el.style.color = "orange";
              console.log("onEnter");
              this.setState({
                value: "onEnter"
              });
            }}
            onEntering={el => {
              el.style.color = "black";
              console.log("onEntering");
              this.setState({
                value: "onEntering"
              });
            }}
            onEntered={el => {
              el.style.color = "red";
              console.log("onEntered");
              this.setState({
                value: "onEntered"
              });
            }}
            onExit={el => {
              el.style.color = "orange";
              console.log("onExit");
              this.setState({
                value: "onExit"
              });
            }}
            onExiting={el => {
              el.style.color = "black";
              console.log("onExiting");
              this.setState({
                value: "onExiting"
              });
            }}
            onExited={el => {
              el.style.color = "red";
              console.log("onExited");
              this.setState({
                value: "onExited"
              });
            }}
          >
            <p>{this.state.value}</p>
          </CSSTransition>
          <button onClick={this.handleToggle}>{this.state.toggle}</button>
        </div>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                timeout={1500}
                classNames="item"
                unmountOnExit
                onEntered={el => {
                  el.style.color = "red";
                }}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            );
          })}
          <button onClick={this.handleAdd}>+Add</button>
        </TransitionGroup>
      </Fragment>
    );
  }

  handleToggle() {
    if (this.state.toggle === "Enter") {
      this.setState({
        toggle: "Exit"
      });
    } else {
      this.setState({
        toggle: "Enter"
      });
    }
    this.setState({
      in: this.state.in ? false : true
    });
  }

  handleAdd() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, "Item"]
      };
    });
  }
}

export default Cartoon;
