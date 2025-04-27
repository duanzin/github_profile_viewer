import { useState } from "react";
import { fetchGitHubUser } from "./api/githubUserApiCalls";
import SearchBar from "./components/searchBar";
import ProfileDisplay from "./components/profileDisplay";
import NotFoundDisplay from "./components/notFoundDisplay";
import LoadingSpinner from "./components/loadingSpinner";
import Title from "./components/title";
import BackgroundDeco from "./components/backgroundDeco";

function App() {
  const [userData, setUserData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setNotFound(false);
    setUserData(null);

    const data = await fetchGitHubUser(username);
    if (data) {
      setUserData(data);
      setNotFound(false);
    } else {
      setUserData(null);
      setNotFound(true);
    }
    setLoading(false);
  };
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <BackgroundDeco />
      <main className="w-6xl h-[33.5rem] py-10 bg-black flex flex-col items-center gap-8 z-10">
        <Title />
        <SearchBar onSearch={handleSearch} />
        {loading && <LoadingSpinner />}
        {notFound && <NotFoundDisplay />}
        {userData && (
          <ProfileDisplay
            avatar={userData.avatar}
            name={userData.name}
            bio={userData.bio}
          />
        )}
      </main>
    </div>
  );
}

export default App;
