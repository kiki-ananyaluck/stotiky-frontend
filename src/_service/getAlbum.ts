import axios from 'axios';

export const getPopularAlbum = async (accessToken:string) => {
  try {
    if (!accessToken) {
      console.error('Access token is missing');
      return null;
    }

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/album/popular`, {
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    });

    if (response.status === 200) {
      // return response.data;
      return response;
    } else {
      console.error(`getPopularArtist response status: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Error in getPopularArtist:", error);
    return null;
  }
};
