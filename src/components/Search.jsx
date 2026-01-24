import { HiSearch, HiChevronDown } from "react-icons/hi";

const DropDown = () => {};

export default function Search() {
  return (
    <div>
      <div className="flex items-center w-full max-w-md mx-auto">
        <div className="flex w-full overflow-hidden border border-zinc-700 bg-stone-100 rounded-xl focus-within:ring-2 focus-within:ring-sky-500">
          <div className="flex items-center justify-center pl-4 text-zinc-400">
            <HiSearch size={20} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-3 bg-transparent text-white outline-none placeholder:text-zinc-500"
          />
          <button className="flex items-center gap-1 px-4 py-3 border-l border-zinc-700 bg-sky-800 text-neutral-100 hover:bg-zinc-700 transition-colors">
            <span>Filters</span>
            <HiChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
