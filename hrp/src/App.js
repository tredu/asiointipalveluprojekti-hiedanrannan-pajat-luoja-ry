import React, {Component} from 'react';
import './App.css';
import Home from './components/home/Home';
import Artists from './components/artists/Artists';
import NavBar from './components/nav/NavBar';

class App extends Component {
  render() {
  let showHome = true;
  return (
      <div className="App">
        <NavBar />
        {showHome &&
          <Home />
        }
        {!showHome &&
          <Artists />
        }
      </div>
  );
  }
}

export default App;
