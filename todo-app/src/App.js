import React from 'react';
import './App.scss';

import TodoList from './components/TodoList';
import Form from './components/Form'


function App() {
  return (
    <div className="App">
     <TodoList />
     <Form />
    </div>
  );
}

export default App;
