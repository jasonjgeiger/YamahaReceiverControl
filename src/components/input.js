import React from 'react';
import { connect } from 'react-redux';
import { apiPath } from '../config';
import { updateInput } from '../redux';
import Styles from './input.module.css';


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: []
    };
    this.change = this.change.bind(this)
    this.set = this.setInput.bind(this)
  }
  
  getList() {
    fetch(apiPath+"/input/list")
    .then(res => res.json())
    .then(
      res => {
        this.setState({ inputs: res })
      }
    )
  }
  getCurrent() {
    fetch(apiPath+"/input/current")
    .then(res => res.json())
    .then(res => {
      this.props.updateInput(res.current);
    })
  }
  setInput(input){
    fetch(apiPath+"/input/set/"+input)
    .then(res => res.json())
    .then(res => {
      this.props.updateInput(res.current);
    })
  }
  change(event){
    this.setInput(event.target.value);
  }
  componentDidMount() {
    this.getList();
    this.getCurrent();
  }
  render() {
    return (
      <div className={Styles.input}>
          <select className={Styles.select} onChange={this.change} id={this.props.input}>
          {this.state.inputs.map(({id,name},index) =>
              <option selected={this.props.input === id && 'selected'} key={index} value={id}>{name}/{id}</option>
          )}
          </select>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  input: state.input,
});

const mapDispatchToProps = {
  updateInput
};

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

export default InputContainer;