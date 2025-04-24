// components/SearchInput.tsx
// components/SearchInput.tsx
import type { Component } from "solid-js";
import searchIcon from "../assets/FindIcon.svg"; // adjust path as needed

const SearchInput: Component = () => {
  return (
    <div class="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full max-w-md">
      <img src={searchIcon.src} alt="Search" class="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search by keyword"
        class="ml-2 outline-none text-sm text-gray-700 w-full placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchInput;
