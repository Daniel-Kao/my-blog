import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>{renderRoutes(routes)}</Router>
      </Provider>
    );
  }
}

export default App;
