import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {

constructor(props){
  super(props);
  this.myName = "Jenny";
  this.state = {};
}

  sayTitle(name){
    return "Mr. " + name;
  }
  render() {
    //const name = "Noel";
    return (
      <div className="App">
        <h2>My name is : {this.sayTitle("Noel")}</h2>
        <h4>My name : {this.myName}</h4>
        <h3>Prop num is : {this.props.propNum}</h3>
        <h3>Prop str is : {this.props.propStr}</h3>
        <h3>Prop obj is : {this.props.propObj.obj1}</h3>
        <Parent msg="Everyone"/>
      </div>
    );
  }
}

App.propTypes = {
  propObj : PropTypes.object,
  propStr : PropTypes.string,
  propNum : PropTypes.number
}

App.defaultProps = {
  propNum: 6,
  propStr: "hello",
  propObj: {
    obj1 : "I am obj 1"
  }
}

class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      car: ['xx','yy','zz']
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({car: this.state.car.reverse()});
  }
  render(){
    return(
      <div>
        <h2 onClick={this.handleClick}>Click me!</h2>
        <Child cool={this.state.car}/>
      </div>
    );
  }
}

Parent.defaultProps = {
  car: ['aa','bb','cc']
}

class Child extends Component {
  render(){
    return(
      <div>
        <h5>This is child : {this.props.cool.map((item , i) => {
            return <p key={i}>{item}</p>;
          })}</h5>
      </div>
    );
  }
}
export default App;
