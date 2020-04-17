import React from 'react';
import { connect } from 'react-redux';
import { apiPath } from '../config';
import { updatePower } from '../redux';

class Power extends React.Component {
  constructor(props) {
    super(props);
    this.on = this.powerOn.bind(this)
    this.off = this.powerOff.bind(this)
  }
  powerOn() {
    fetch(apiPath+"/power/on")
    .then(res => res.json())
    .then(res => {
        this.props.updatePower(res.status);
    })
  }
  powerOff() {
    fetch(apiPath+"/power/off")
    .then(res => res.json())
    .then(res => {
        this.props.updatePower(res.status);
    })
  }
  

  render() {
    return (
      <div>
        <button onClick={this.on}>On</button>
        <button onClick={this.off}>Off</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  power: state.power,
});

const mapDispatchToProps = {
  updatePower
};

const PowerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Power);

export default PowerContainer;