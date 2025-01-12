import { getTrackPlaylistById } from "@/_service/playlist";

export const fetchTrackPlaylist = async (
  accessToken: string,
  playlistId: string,
  setDisplayTrack: any,
  setDisplayDetail:any
) => {
  if (accessToken) {
    try {
      const response = await getTrackPlaylistById(accessToken, playlistId);
      if (response?.status === 200) {
        const data = response.data.playlist.tracks.items;
        const dataDetail = response.data.playlist;
        setDisplayDetail(dataDetail)
        setDisplayTrack(data);
      }
    } catch (error) {
      console.log("Error from searchRequest()", error);
      setDisplayTrack([]);
    }
  }
};