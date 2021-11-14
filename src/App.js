import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './context/ContextForm';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
