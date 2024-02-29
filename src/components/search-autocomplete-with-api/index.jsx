import { useEffect, useState } from "react";

export function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchListOfUser() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
      });
      const data = await res.json();
      if (data) {
        setUsers(data);
        setLoading(false);
        setErrorMsg(null);
      }
      console.log(data);
    } catch (e) {
      setLoading(false);
      console.log(e.message);
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    fetchListOfUser();
  }, []);
    
  return (
    <div className="search-autocomplete-container">
      <input name="search-users" placeholder="Search user here..."></input>
    </div>
  );
}
