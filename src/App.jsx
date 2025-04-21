import { useState } from "react";
import { fetchGitHubUser } from "./api/githubUserApiCalls";
import SearchBar from "./components/searchBar";
import ProfileDisplay from "./components/profileDisplay";
import NotFoundDisplay from "./components/notFoundDisplay";
import Logo from "./assets/image 1.png";

function App() {
  const [userData, setUserData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async (username) => {
    const data = await fetchGitHubUser(username);
    if (data) {
      setUserData(data);
      setNotFound(false);
    } else {
      setUserData(null);
      setNotFound(true);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="w-6xl h-[33.5rem] py-10 bg-black flex flex-col items-center gap-8">
        <div className="flex flex-row items-center justify-center gap-2.5">
          <img src={Logo} alt="Logo Github" />
          <h1 className="text-6xl text-white text-center font-semibold tracking-normal">
            Perfil&nbsp;<b className="font-extrabold">GitHub</b>
          </h1>
        </div>
        <SearchBar onSearch={handleSearch} />
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
