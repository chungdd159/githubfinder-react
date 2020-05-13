import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './components/users/Users';
import NavBar from './components/layout/NavBar';
import { Provider } from './context';
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import about from './components/pages/about';
import UserDetail from './components/users/UserDetail';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <Search />
                    <Users />
                  </React.Fragment>
                )}
              />
              <Route exact path="/about" component={about} />
              <Route exact path="/user/:login" component={UserDetail} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
