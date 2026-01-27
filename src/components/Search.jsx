import { BiSearch, BiCaretDown } from "react-icons/bi";
import DropDown from "./DropDown";
import { useState } from "react";

export default function Search() {
  const [toggleSort, setToggleSort] = useState(false);
  return (
    <div className="flex items-center w-full max-w-md mx-auto mb-3 mt-3">
      <div className="flex w-full border border-zinc-700 bg-neutral-200 rounded-xl focus-within:ring-2 focus-within:ring-sky-500">
        <div className="flex items-center justify-center pl-4 text-zinc-400">
          <BiSearch size={20} />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          className="w-full rounded-l-xl px-4 py-3 bg-transparent text-zinc-800 outline-none placeholder:text-zinc-500"
          placeholder="Search"
        />
        <div className="relative">
          <button
            onClick={() => setToggleSort(!toggleSort)}
            type="button"
            className="flex items-center whitespace-nowrap rounded-r-xl gap-1 px-4 py-3 border-l border-zinc-700 bg-blue-700/50 text-zinc-300 hover:bg-blue-700 transition-colors"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <span>Sort By</span>
            <BiCaretDown className="ml-2" />
          </button>
          {toggleSort && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setToggleSort(false)}
              ></div>
              <div className="relative z-50">
                <DropDown />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
