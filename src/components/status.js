import React from 'react';
import { apiPath } from '../config';
export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      hasError: false,
      error:null,
      volume: {
        formatted:0
      }
    };
  }
  load(){
    fetch(apiPath+"/power/current")
    .then(
      res => {
        if (res.status) {
          this.setState({ hasLoaded: true })
          return res.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      }
    )
    .then(
      res => {
        if (res.status === true) {
          this.getInput();
          this.getVolume();
          this.getPower();
        }
      }
    )
    .catch(
      error => {
        this.setState({ error, hasError: true, hasLoaded: true })
      }
    );
  }
  getInput() {
    fetch(apiPath+"/input/current")
    .then(res => res.json())
    .then(res => this.setState({ input: res }))
  }
  getVolume() {
    fetch(apiPath+"/volume/current")
    .then(res => res.json())
    .then(res => this.setState({ volume: res }))
  }
  getPower() {
    fetch(apiPath+"/power/current")
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({ power: res.status })
    })
  }
  componentDidMount() {
    this.load()
    
  }

  render() {
    if (!this.state.hasLoaded) return (<div>Loading...</div>)
    if (this.state.hasError) return (<div>{JSON.stringify(this.state.error)}</div>)
    return (
      <div>
        Power:{this.state.power.toString()}
        Current input: {this.state.input}<br/>
        Volume:{this.state.volume.formatted}
      </div>
    );
  }
}