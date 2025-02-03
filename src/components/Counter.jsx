"use client";
import { Fragment, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <p className="text-center text-3xl font-bold mt-10">{count}</p>

      <div className="flex justify-center gap-2 mt-10">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 rounded-sm bg-red-500 hover:bg-red-600 transition-all text-white "
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 rounded-sm bg-green-500 hover:bg-green-600 transition-all text-white"
        >
          Increment
        </button>
      </div>
    </Fragment>
  );
}
