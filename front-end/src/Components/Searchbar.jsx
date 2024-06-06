"use client";

// import { useState } from "react";

function Searchbar() {
  // const [value, useValue] = useState;
  return (
    <div className="p-2 relative mb-3">
      <input
        type="text"
        className=" block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] bg-none outline-none shadow-md"
        id="exampleFormControlInput1"
        placeholder="search"
      />
      <label
        for="exampleFormControlInput1"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
      ></label>
    </div>
  );
}

export default Searchbar;
