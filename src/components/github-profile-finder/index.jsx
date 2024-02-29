import { useEffect, useState } from "react";
import User from "./user.jsx";
import "./styles.css";

export default function GithubProfileLoader() {
  const [userName, setUserName] = useState("Roger-wsy");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      if (data) {
        setLoading(false);
        setUserData(data);
        setUserName("");
      }
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <div>Loading Data ! Please Wait</div>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <div className="input-column">
          <input
            name="search-by-username"
            type="text"
            placeholder="Search Github Username..."
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </div>
  );
}
