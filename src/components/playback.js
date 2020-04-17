import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faPause } from '@fortawesome/free-solid-svg-icons'
import { apiPath } from '../config';

export default class Playback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.stop = this.stop.bind(this)
  }
  play(){
    fetch(apiPath+"/playback/play");
  }
  pause(){
    fetch(apiPath+"/playback/pause");
  }
  stop(){
    fetch(apiPath+"/playback/stop");
  }
  
  
  render() {
    return (
      <div>
        <button className="icon" onClick={this.play}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className="icon" onClick={this.pause}>
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button  className="icon" onClick={this.stop}>
          <FontAwesomeIcon icon={faStop} />
        </button>
      </div>
    );
  }
}