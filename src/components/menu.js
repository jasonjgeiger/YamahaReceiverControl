import React from 'react';
import { apiPath } from '../config';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.option = this.option.bind(this)
    this.display = this.display.bind(this)
    this.return = this.return.bind(this)
  }
  option(){
    fetch(apiPath+"/menu/option");
  }
  display(){
    fetch(apiPath+"/menu/display");
  }
  return(){
    fetch(apiPath+"/remote/return");
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