import React from 'react';
import { Todo } from './pages/Todo';
import { Layout } from './components/Layout'; // Ensure this path is correct

function App() {
  return (
    <Layout>
      <Todo />
    </Layout>
  );
}

export default App;

