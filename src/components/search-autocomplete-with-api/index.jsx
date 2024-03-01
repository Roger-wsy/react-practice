import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
      console.log(filteredData);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchListOfUser() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyapi.online/api/movies", {
        method: "GET",
      });
      const data = await res.json();
      if (data) {
        setUsers(data.map((movieItem) => movieItem.movie));
        setLoading(false);
        setErrorMsg(null);
      }
    } catch (e) {
      setLoading(false);
      console.log(e.message);
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    fetchListOfUser();
  }, []);

  if (loading) {
    return <div>Loading Data ! Please Wait</div>;
  }

  return (
    <div className="search-autocomplete-container">
      <input
        value={searchParam}
        onChange={handleChange}
        name="search-users"
        placeholder="Search user here..."
      ></input>
      {showDropdown && <Suggestions handleClickMethoddata={filteredUsers} />}
    </div>
  );
}
