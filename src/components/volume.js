import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faVolumeUp,
  faVolumeDown,
  faVolumeMute
 } from '@fortawesome/free-solid-svg-icons'
export default class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.volumeUp = this.volumeUp.bind(this)
    this.volumeDown = this.volumeDown.bind(this)
  }
  volumeUp() {
      fetch("http://localhost:3000/volume/set/up")
  }
  volumeDown() {
    fetch("http://localhost:3000/volume/set/down")
  }
  render() {
    return (
      <div>
          <button className="icon" onClick={this.volumeUp}>
            <FontAwesomeIcon icon={faVolumeUp} />
          </button>
          <button className="icon" onClick={this.volumeDown}>
            <FontAwesomeIcon icon={faVolumeDown} />
          </button>
          <button className="icon" onClick={this.volumeDown}>
            <FontAwesomeIcon icon={faVolumeMute} />
          </button>
      </div>
    );
  }
}