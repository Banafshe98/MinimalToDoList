import React, { useEffect, useState } from "react";
import Calendar from "../assets/Calendar.svg";
import { Addtask } from "./Addtask";
import Task from "./Task";
import DarkMode from "./DarkMode";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState(
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  );

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((task, index) => index !== id));
  };

  const addItem = () => {
    if (inputText.trim() === "") return;
    setItems((prev) => [...prev, inputText]);
    setInputText("");
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(items));
  }, [items]);

  const [darkMode, setDarkMode] = useState(false);

  return (
      <div className="bg-yellow-50 rounded-md p-10 flex flex-col gap-1 mb-1">
        <div className="flex flex-row items-center justify-center gap-1">
          <img src={Calendar} alt="Calendar" />
          <p className="text-lg font-bold">To Do list</p>
        </div>
        <div>
          <Addtask
            inputText={inputText}
            handleChange={handleChange}
            addItem={addItem}
          />
        </div>
        <ul className="flex flex-col">
          {items.map((task, id) => (
            <Task text={task} id={id} key={id} deleteItem={deleteItem} />
          ))}
        </ul>
      </div>
  );
};

export default Todo;
