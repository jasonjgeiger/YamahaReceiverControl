import React from 'react';
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.option = this.option.bind(this)
    this.display = this.display.bind(this)
    this.return = this.return.bind(this)
  }
  option(){
    fetch("http://localhost:3000/menu/option");
  }
  display(){
    fetch("http://localhost:3000/menu/display");
  }
  return(){
    fetch("http://localhost:3000/remote/return");
  }
  render() {
    return (
      <div>
        <button onClick={this.option}>Option</button>
        <button onClick={this.return}>Return</button>
        <button onClick={this.display}>Display</button>
        
      </div>
    );
  }
}