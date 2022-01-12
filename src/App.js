import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { getUser } from './services/users';
import Task from './Views/Task';
import Auth from './Views/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && <Task />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
