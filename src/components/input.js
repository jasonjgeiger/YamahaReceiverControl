import React from 'react';
import Styles from './input.module.scss';

export default class Source extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      list: [],
      current:''
    };
    this.change = this.change.bind(this)
  }
  
  getList() {
    fetch("http://localhost:3000/input/list")
    .then(res => res.json())
    .then(res => this.setState({ list: res }))
  }
  getCurrent() {
    fetch("http://localhost:3000/input/current")
    .then(res => res.json())
    .then(res => this.setState({ current: res }))
  }
  setInput(input){
      console.log(input);
    fetch("http://localhost:3000/input/set/"+input)
    .then(res => res.json())
    .then(res => this.getCurrent())
  }
  change(event){
    this.setInput(event.target.value);
  }
  componentDidMount() {
    this.getList();
  }
  render() {
    return (
      <div className={Styles.input}>
          <select className={Styles.select} onChange={this.change} value={this.state.current.name}>
          {this.state.list.map((item,index) =>
              <option key={index} value={item}>{item}</option>
          )}
          </select>
      </div>
    );
  }
}