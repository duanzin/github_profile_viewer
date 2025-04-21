import axios from "axios";

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/${username}`);
    const data = response.data;
    return {
      avatar: data.avatar_url,
      name: data.name,
      bio: data.bio,
    };
  } catch (error) {
    console.error(error.response?.data?.message || error.message);
    return null;
  }
};