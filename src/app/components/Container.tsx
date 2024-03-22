"use client";

import React from "react";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";
import { RxDragHandleDots2 } from "react-icons/rx";

export function Container() {
  const todoItems = [
    "Schedule perm",
    "Rewind VHS tapes",
    "Make change for the arcade",
    "Get disposable camera developed",
    "Learn C++",
    "Return Nintendo Power Glove",
  ];
  const doneItems = ["Pickup new mix-tape from Beth"];
  const pendingItems = ["pending1", "pending2", "pending3"];
  const extraItems = ["extra1", "extra2", "extra3"];

  const [todoList, todos] = useDragAndDrop<HTMLUListElement, string>(
    todoItems,
    {
      group: "todoList",
      plugins: [animations()],
      dragHandle: ".handler",
    },
  );
  const [doneList, dones] = useDragAndDrop<HTMLUListElement, string>(
    doneItems,
    {
      group: "todoList",
      plugins: [animations()],
      dragHandle: ".handler",
    },
  );
  const [pendingList, pending] = useDragAndDrop<HTMLUListElement, string>(
    pendingItems,
    {
      group: "todoList",
      plugins: [animations()],
      dragHandle: ".handler",
    },
  );
  const [extraList, extra] = useDragAndDrop<HTMLUListElement, string>(
    extraItems,
    {
      group: "todoList",
      plugins: [animations()],
      dragHandle: ".handler",
    },
  );
  return (
    <section>
      <div className="flex gap-4 p-2">
        <ul
          ref={todoList}
          className="border-2 border-slate-100 p-2 w-[18rem] h-[30rem] rounded-md shadow-md"
        >
          {todos.map((todo) => (
            <li
              className="border-2 border-slate-300 bg-slate-100 m-2 flex items-center gap-2 p-2 rounded-md shadow-md text-neutral-800"
              key={todo}
            >
              <span className="handler text-lg text-neutral-800 hover:cursor-pointer">
                <RxDragHandleDots2 />
              </span>
              {todo}
            </li>
          ))}
        </ul>
        <ul
          ref={doneList}
          className="border-2 border-slate-100 p-2 w-[18rem] h-[30rem] rounded-md shadow-md"
        >
          {dones.map((done) => (
            <li
              className="border-2 border-slate-300 bg-slate-100 m-2 flex items-center gap-2 p-2 rounded-md shadow-md text-neutral-800"
              key={done}
            >
              <span className="handler text-lg text-neutral-800 hover:cursor-pointer">
                <RxDragHandleDots2 />
              </span>
              {done}
            </li>
          ))}
        </ul>
        <ul
          ref={pendingList}
          className="border-2 border-slate-100 p-2 w-[18rem] h-[30rem] rounded-md shadow-md"
        >
          {pending.map((pending) => (
            <li
              className="border-2 border-slate-300 bg-slate-100 m-2 flex items-center gap-2 p-2 rounded-md shadow-md text-neutral-800"
              key={pending}
            >
              <span className="handler text-lg text-neutral-800 hover:cursor-pointer">
                <RxDragHandleDots2 />
              </span>
              {pending}
            </li>
          ))}
        </ul>
        <ul
          ref={extraList}
          className="border-2 border-slate-100 p-2 w-[18rem] h-[30rem] rounded-md shadow-md"
        >
          {extra.map((extra) => (
            <li
              className="border-2 border-slate-300 bg-slate-100 m-2 flex items-center gap-2 p-2 rounded-md shadow-md text-neutral-800"
              key={extra}
            >
              <span className="handler text-lg text-neutral-800 hover:cursor-pointer">
                <RxDragHandleDots2 />
              </span>
              {extra}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
