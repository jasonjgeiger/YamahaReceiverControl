import React from 'react';
import Styles from './app.module.scss';
import Status from './components/status';
import Volume from './components/volume';
import Input from './components/input';
import Remote from './components/remote';
import Playback from './components/playback';
import Menu from './components/menu';

function App() {
  return (
    <div className={Styles.app}>
      <header className={Styles.header}>
        <Status />
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

export default App;
