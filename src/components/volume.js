import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {buttonStyle} from './remote.module.css';
import { 
  faVolumeUp,
  faVolumeDown,
  faVolumeMute
 } from '@fortawesome/free-solid-svg-icons'
import { apiPath } from '../config';

export default class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.volumeUp = this.volumeUp.bind(this)
    this.volumeDown = this.volumeDown.bind(this)
  }
  volumeUp() {
      fetch(apiPath+"/volume/set/up")
  }
  volumeDown() {
    fetch(apiPath+"/volume/set/down")
  }
  render() {
    return (
      <div>
          <button className={buttonStyle} onClick={this.volumeUp}>
            <FontAwesomeIcon icon={faVolumeUp} />
          </button>
          <button className={buttonStyle} onClick={this.volumeDown}>
            <FontAwesomeIcon icon={faVolumeDown} />
          </button>
          <button className={buttonStyle} onClick={this.volumeDown}>
            <FontAwesomeIcon icon={faVolumeMute} />
          </button>
      </div>
    );
  }
}