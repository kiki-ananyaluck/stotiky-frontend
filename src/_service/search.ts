import axios from "axios";

export const searchSong = async (accessToken: string, query: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search?query=${query}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Error in searchSong response status: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Error in searchSong:", error);
    return null;
  }
};
