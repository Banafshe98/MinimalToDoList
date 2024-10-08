import React from "react";
import { Layout } from "./components/Layout"; // Ensure this path is correct
import { Addtask } from "./components/Addtask";
import Task from "./components/Task";
import Todo from "./components/Todo";

function App() {
  return (
    <Layout>
      <Todo>
        <Addtask />
        <Task />
      </Todo>
    </Layout>
  );
}

export default App;
