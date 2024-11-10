import React, { useEffect, useState } from "react";
import Calendar from "../assets/Calendar.svg";
import { Addtask } from "./Addtask";
import Task from "./Task";
import {
  closestCorners,
  DndContext,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Ensure that both active and over are defined
    if (active.id !== over.id) {
      const oldIndex = items.findIndex(item => item === active.id);
      const newIndex = items.findIndex(item => item === over.id);

      // Create a new array with the reordered items
      const newItems = Array.from(items);
      newItems.splice(oldIndex, 1); // Remove the dragged item
      newItems.splice(newIndex, 0, active.id); // Insert it at the new position

      setItems(newItems);
    }
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
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <ul className="flex flex-col">
            {items.map((task, id) => (
              <Task text={task} id={task} key={id} deleteItem={deleteItem} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Todo;
