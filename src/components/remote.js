import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowAltCircleUp,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleDown,
  faDotCircle
 } from '@fortawesome/free-solid-svg-icons'
import { apiPath } from '../config';
import Styles from './remote.module.scss';

export default class Remote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      volume: {
        formatted:0
      }
    };
    this.up = this.up.bind(this)
    this.down = this.down.bind(this)
    this.left = this.left.bind(this)
    this.right = this.right.bind(this)
    this.sel = this.sel.bind(this)
  }
  up(){
    fetch(apiPath+"/remote/Up");
  }
  down(){
    fetch(apiPath+"/remote/Down");
  }
  left(){
    fetch(apiPath+"/remote/Left");
  }
  right(){
    fetch(apiPath+"/remote/Right");
  }
  sel(){
    fetch(apiPath+"/remote/Sel");
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div>
          <button className="icon" onClick={this.up}>
            <FontAwesomeIcon icon={faArrowAltCircleUp} />
          </button>
        </div>
        <div>
          <button className="icon" onClick={this.left}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </button>
          <button className="icon" onClick={this.sel}>
            <FontAwesomeIcon icon={faDotCircle} />
          </button>
          <button className="icon" onClick={this.right}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
        </div>
        <div>
          <button className="icon" onClick={this.down}>
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </button>
        </div>
      </div>
    );
  }
}