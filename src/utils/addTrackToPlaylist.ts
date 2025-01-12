import { addTrackPlaylist } from "@/_service/playlist";
import { fetchTrackPlaylist } from "./fetchTrackPlaylist";

export const addTrackToPlaylist = async (track: any, playlist_id: string, accessToken: string,setDisplayTrack:any,setDisplayDetail:any) => {
  const playlistData = {
    playlist_id: playlist_id,
    uris: [track.uri],
    position: 0,
  };

  const response = await addTrackPlaylist(accessToken, playlistData);
  console.log("fetchTrackPlaylist doing")
  await fetchTrackPlaylist(accessToken, playlist_id,setDisplayTrack,setDisplayDetail);
  if (response) {
    console.log('Track added to playlist successfully', response);
  }
};