import { BiCheck } from "react-icons/bi";

export default function DropDown({
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) {
  const sortOptions = [
    { id: "petName", label: "Pet Name" },
    { id: "ownerName", label: "Owner Name" },
    { id: "aptDate", label: "Date" },
  ];

  const orderOptions = [
    { id: "asc", label: "Asc" },
    { id: "desc", label: "Desc" },
  ];

  const itemClass =
    "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer";

  return (
    <div
      className="absolute right-0 mt-2 w-56 origin-top-right
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {sortOptions.map((option) => (
          <div
            key={option.id}
            className={itemClass}
            role="menuitem"
            onClick={() => onSortByChange(option.id)}
          >
            {option.label} {sortBy === option.id && <BiCheck />}
          </div>
        ))}
        {orderOptions.map((option) => (
          <div
            key={option.id}
            className={itemClass}
            role="menuitem"
            onClick={() => onOrderByChange(option.id)}
          >
            {option.label} {orderBy === option.id && <BiCheck />}
          </div>
        ))}
      </div>
    </div>
  );
}
