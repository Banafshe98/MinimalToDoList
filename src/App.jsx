import React from 'react';
import { Todo } from './pages/Todo';
import { Layout } from './components/Layout'; // Ensure this path is correct
import { Addtask } from './components/Addtask';

function App() {
  return (
    <Layout>
      <Todo />
      <Addtask/>
    </Layout>
  );
}

export default App;

