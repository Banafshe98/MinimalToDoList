import React from "react";
import { Layout } from "./components/Layout";
import { Addtask } from "./components/Addtask";
import Task from "./components/Task";
import Todo from "./components/Todo";
import { DarkModeProvider } from "./usecontext/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
    <Layout>
      <Todo>
        <Addtask />
        <Task />
      </Todo>
    </Layout>
    </DarkModeProvider>
  );
}

export default App;
