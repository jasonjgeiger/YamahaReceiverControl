import React from 'react';
export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      volume: {
        formatted:0
      },
      input:{}
    };
  }
  getCurrent() {
    fetch("http://localhost:3000/input/current")
    .then(res => res.json())
    .then(res => this.setState({ input: res }))
    console.log(this.state);
  }
  getVolume() {
    fetch("http://localhost:3000/volume/current")
    .then(res => res.json())
    .then(res => this.setState({ volume: res }))
  }
  getPower() {
    fetch("http://localhost:3000/power/current")
    .then(res => res.json())
    .then(res => this.setState({ volume: res }))
  }
  componentDidMount() {
    this.getVolume();
    this.getCurrent();
  }

  render() {
    return (
      <div>
        Current input: {this.state.input.name}<br/>
        Volume:{this.state.volume.formatted}
      </div>
    );
  }
}