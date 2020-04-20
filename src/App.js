import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={UserList} />
          <Route path='/users/:id' component={UserDetail} />
          <Route path='/posts/:id' exact component={PostDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
