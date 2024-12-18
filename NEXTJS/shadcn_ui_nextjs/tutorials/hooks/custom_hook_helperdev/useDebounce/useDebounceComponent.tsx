import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Input from "./Input";

function DebounceComp() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const debouncedSearchQuery = useDebounce(searchQuery, 600);

  useEffect(() => {
    if (debouncedSearchQuery) {
      // Handle call API for Search.
      console.log("Search value delay 600ms -> ", debouncedSearchQuery);
    }
  }, [debouncedSearchQuery]);

  return (
    <div>
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />

      <p>Search query: {searchQuery}</p>
      <p>Search query delay 600ms: {debouncedSearchQuery}</p>
    </div>
  );
}

export default DebounceComp;
