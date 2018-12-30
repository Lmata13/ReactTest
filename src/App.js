import React, { Component } from 'react';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Sidebar />
        <Main />
      </div>
    
    );
  }
}

export default App;
