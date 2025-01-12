import axios from 'axios';

export const getPopularPlaylist = async (accessToken:string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/playlist/popular`, {
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


export const postPlaylist = async (accessToken:string, playlistData:{}) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/playlist/create`,
      playlistData, {
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    });

    if (response.status === 200) {
      return response;
    } else {
      console.error(`postPlaylist response status: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Error in postPlaylist:", error);
    return null;
  }
};

export const addTrackPlaylist = async (accessToken:string, playlistData:{}) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/playlist/add-track`,
      playlistData, {
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    });

    if (response.status === 200) {
      return response;
    } else {
      console.error(`postPlaylist response status: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Error in postPlaylist:", error);
    return null;
  }
};


export const getTrackPlaylistById = async (accessToken:string,playlist_id:string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/playlist/by-id?playlist_id=${playlist_id}`, {
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

export const delTrackPlaylist = async (accessToken: string, playlistData: { tracks: { uri: string }[], snapshot_id: string }, playlistId: string) => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/playlist/delete-track?playlist_id=${playlistId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: playlistData,
    });

    if (response.status === 200) {
      return response;
    } else {
      console.error(`delTrackPlaylist response status: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Error in delTrackPlaylist:", error);
    return null;
  }
};

export const getPlaylistByUserId = async (accessToken:string,user_id:string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/playlist/get-by-user-id?user_id=${user_id}`, {
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
