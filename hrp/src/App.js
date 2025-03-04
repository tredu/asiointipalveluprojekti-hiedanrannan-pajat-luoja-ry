import React, {Component} from 'react';
import { Router, Route, Switch, BrowserRouter, History } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import Home from './components/home/Home';
import Artists from './components/artists/Artists';
import Events from './components/events/Events';
import NavBar from './components/nav/NavBar';
import Admin from './components/admin/Admin';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router history={createBrowserHistory()}>
              {window.location.pathname.indexOf("/admin") !== 0 &&
                <NavBar /> 
              }
                <div className="routingContent">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/artists" component={Artists} />
                  <Route path="/events" component={Events} />
                  <Route path="/admin" component={Admin} />
                  <Route path="/contact" component={Contact} />
                </Switch>
                {window.location.pathname.indexOf("/admin") !== 0 &&
                <Footer /> }
                
              </div>
          </Router>


        </div>
    );
  }
}

export default App;
