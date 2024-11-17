import React, { useEffect, useState } from "react";
import Calendar from "../assets/Calendar.svg";
import { Addtask } from "./Addtask";
import Task from "./Task";
import { closestCorners, DndContext, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable";
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState(
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  );

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addItem = () => {
    if (inputText.trim() === "") return;
    const newTask = { id: uuidv4(), text: inputText };
    setItems((prev) => [...prev, newTask]);
    setInputText("");
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(items));
  }, [items]);

  const getItemPosition = (id) => {
    return items.findIndex((item) => item.id === id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Check if the item was dropped over itself
    if (active.id === over.id) return;

    // Get the original and new positions
    const originalPosition = getItemPosition(active.id);
    const newPosition = getItemPosition(over.id);

    // Reorder the items
    setItems((items) => arrayMove(items, originalPosition, newPosition));
  };

  return (
    <div className="bg-todo rounded-md p-10 flex flex-col gap-1 mb-1 dark:bg-custom-beige">
      <div className="flex flex-row items-center justify-center mb-6">
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

      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <SortableContext items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
          <ul className="flex flex-col">
            {items.map((task) => (
              <Task text={task.text} id={task.id} key={task.id} deleteItem={deleteItem} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Todo;
