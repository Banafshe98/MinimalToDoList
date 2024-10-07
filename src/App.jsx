import React from 'react';
import { Todo } from './pages/Todo';
import { Layout } from './components/Layout'; // Ensure this path is correct
import { Addtask } from './components/Addtask';
import Task from './components/Task';

function App() {
  return (
    <Layout>
      <Todo />
      <Addtask/>
      <Task/>
    </Layout>
  );
}

export default App;

