import React from 'react';
import { connect } from 'react-redux';
import { apiPath } from './config';
import { updatePower } from './redux';
//
import Styles from './app.module.scss';
import Power from './components/power';
import Status from './components/status';
import Volume from './components/volume';
import Input from './components/input';
import Remote from './components/remote';
import Playback from './components/playback';
import Menu from './components/menu';


class App extends React.Component {
  constructor(props) {
    super(props);
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
        this.props.updatePower(res.status);
      }
    )
    .catch(
      error => {
        this.setState({ error, hasError: true, hasLoaded: true })
      }
    );
  }
  
  componentDidMount(){
    this.load();
  }
  render(){
    return (
      <div className={Styles.app}>
        <header className={Styles.header}>
          <Power />
          Power: {JSON.stringify(this.props.power)}<br/>
          Input: {JSON.stringify(this.props.input)}<br/>
        </header>      
        <section className={Styles.section}>
          <Volume/>
        </section>
        <section className={Styles.section}>
          <Playback />
        </section>
        <section className={Styles.section}>
          <Remote />
        </section>
        <section className={Styles.section}>
          <Menu />
        </section>
        <section className={Styles.section}>  
          <Input />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  power: state.power,
  input: state.input
});

const mapDispatchToProps = {
  updatePower
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
