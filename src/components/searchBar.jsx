import { useState } from "react";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <div className="flex flex-row w-lg h-16 bg-white border rounded-lg border-gray-300">
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full h-auto p-4 bg-white rounded-lg text-black text-xl 
        font-semibold tracking-normal placeholder:text-black focus:outline-0"
      />
      <button
        onClick={handleSearch}
        className="h-full aspect-square bg-blue-600 text-white text-2xl border-l rounded-lg border-gray-300
        cursor-pointer"
      >
        <i className="material-icons-outlined">search</i>
      </button>
    </div>
  );
}

export default SearchBar;